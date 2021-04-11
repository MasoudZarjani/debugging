import Debug from "../models/Debug";
import userController from "./userController";
class DebugController {
  static async create(req, res) {
    try {
      let errorList = req.body.errorList;
      let user = [];
      userController.create(req).then(function (result) {
        this.user = result;
      });
      Debug.create(
        {
          type: errorList.type,
          statusCode: errorList.statusCode,
          body: errorList.body,
          level: errorList.level,
          page: errorList.page,
          occurredAt: errorList.occurredAt,
          project: errorList.project,
          user: user,
        },
        function (err, data) {
          if (err)
            return res
              .status(500)
              .send("There was a problem registering the error.");
          return res.send(data);
        }
      );
    } catch (exception) {
      res.status(500).send(exception);
    }
  }
}

export default DebugController;
