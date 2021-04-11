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
          return res.status(201).json({
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
      return exception;
    }
  }
}

export default UserController;
