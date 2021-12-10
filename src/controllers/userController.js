import UserInfos from "../models/user";

class UserController {
  //Create user in db

  static async createUser(req, res) {
    const user = await UserInfos.create(req.body);

    if (!user) {
      return res.status(404).json({ error: "user not registered" });
    }

    return res
      .status(200)
      .json({ message: "User created successfully", data: user });
  }

  //get all users

  static async getAllUsers(req, res) {
    const users = await UserInfos.find();

    if (!users) {
      return res.status(404).json({ error: "users not successfully retrieved" });
    }

    return res
      .status(200)
      .json({ message: "Successfully retrieved users", data: users });
  }

}

export default UserController;
