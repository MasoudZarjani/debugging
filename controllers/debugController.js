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
                const userModel = new User(userData);
                return userModel.save();
              }
              return user;
            })
            .then((result) => {
              errorList.forEach((element) => {
                element.user = result;
                const debug = new Debug(element);
                debug.save();
              });
            })
            .then(() => {
              return res.status(200).json({
                data: {
                  status: true,
                },
              });
            })
            .catch((err) => {
              res.status(500).json({
                message: err,
              });
            });
        else
          return res.status(500).json({
            message: "Project not exists",
          });
      });
    } catch (exception) {
      res.status(500).json({
        message: exception,
      });
    }
  }
}

export default DebugController;
