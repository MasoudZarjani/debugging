import Debug from "../models/Debug";

class DebugController {
  static async create(req, res) {
    try {
      var body = req.body;
      Debug.create(
        {
          type: body.type,
          statusCode: body.statusCode,
          body: body.body,
          level: body.level,
          page: body.page,
        },
        function (err, debug) {
          if (err)
            return res
              .status(500)
              .send("There was a problem registering the user.");
          return res.send(debug);
        }
      );
    } catch (exception) {
      res.status(500).send(exception);
    }
  }
}

export default DebugController;
