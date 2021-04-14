import Debug from "../models/Debug";
import Project from "../models/Project";
import User from "../models/User";
class DebugController {
  static async create(req, res) {
    try {
      let errorList = req.body.errorList;
      let userData = req.body.user;
      let project = req.body.project;
      Project.countDocuments({ name: project.name }, (err, projectCount) => {
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
                element.versionCode = project.versionCode;
                element.versionName = project.versionName;
                element.user = result;
                const debug = new Debug(element);
                debug.save();
              });
            })
            .then(() => {
              res.status(200).json({
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
          res.status(500).json({
            message: "Project not exists",
          });
      });
    } catch (exception) {
      res.status(500).json({
        message: exception,
      });
    }
  }

  static async list(req, res) {
    try {
      Debug.find({})
        .sort({ createdAt: -1 })
        .then((result) => {
          res.status(200).json({
            data: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: err,
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
