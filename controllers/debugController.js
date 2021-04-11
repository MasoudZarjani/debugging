import Debug from "../models/Debug";
import Project from "../models/Project";
import User from "../models/User";
class DebugController {
  static async create(req, res) {
    try {
      let errorList = req.body.errorList;
      let userData = req.body.user;
      let projectName = req.body.projectName;
      Project.countDocuments({ name: projectName }, (err, projectCount) => {
        if (projectCount > 0)
          User.findOne()
            .where(userData.deviceId)
            .then((user) => {
              if (!user) {
                const userModel = new User({
                  uuid: userData.uuid,
                  mobile: userData.mobile,
                  username: userData.username,
                  deviceId: userData.deviceId,
                  deviceName: userData.deviceName,
                });
                return userModel.save();
              }
              return user;
            })
            .then((result) => {
              errorList.forEach((element) => {
                const debug = new Debug({
                  type: element.type,
                  statusCode: element.statusCode,
                  body: element.body,
                  level: element.level,
                  page: element.page,
                  occurredAt: element.occurredAt,
                  project: element.project,
                  user: result,
                });
                debug.save();
              });
            });
        return res.status(200).json({
          data: {
            status: true,
          },
        });
      });
    } catch (exception) {
      res.status(500).send(exception);
    }
  }
}

export default DebugController;
