import Project from "../models/Project";

class UserController {
  static async create(req, res) {
    try {
      let body = req.body;
      Project.findOne()
        .where(body.name)
        .then((project) => {
          if (!project) {
            const projectModel = new Project({
              name: body.name,
            });
            return projectModel.save();
          }
          return project;
        })
        .then(() => {
          res.status(201).json({
            data: {
              status: true,
              message: "Project registered success.",
            },
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    } catch (exception) {
      res.status(500).json({
        message: exception,
      });
    }
  }

  static async update(req, res) {
    try {
      let body = req.body;
      Project.findOneAndUpdate({ _id: body.id }, { $set: body }, { new: true })
        .then(() => {
          res.status(201).json({
            data: {
              status: true,
              message: "Project update success.",
            },
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

export default UserController;
