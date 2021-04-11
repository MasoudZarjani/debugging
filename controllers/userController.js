import User from "../models/User";

class UserController {
  static async create(req) {
    try {
      let body = req.body.user;
      const result = await User.findOne().where(body.deviceId);
      if (!result) {
        User.create(
          {
            uuid: body.uuid,
            mobile: body.mobile,
            username: body.username,
            deviceId: body.deviceId,
            deviceName: body.deviceName,
          },
          function (err, data) {
            if (err) return false;
            return data;
          }
        );
      } else return result;
    } catch (exception) {
      return exception;
    }
  }
}

export default UserController;
