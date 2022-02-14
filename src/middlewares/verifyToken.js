import TokenAuth from "../helpers/tokenAuth";
import userInfos from "../models/user";
import userVoteInfos from "../models/KakaUser";

const isUserExist = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(400).json({ error: "no token provided" });
    }
    const data = TokenAuth.decodeToken(token);
    const { name } = data;
    if (name === "JsonWebTokenError") {
      return res.status(400).json({ error: "Invalid JWT token" });
    }
    if (name === "TokenExpiredError") {
      return res.status(400).json({ error: "JWT token is expired" });
    }
    req.user = data.user;

    const user = await userInfos.findById(req.user._id);

    if (!user) {
      const userVote = await userVoteInfos.findById(req.user._id);
      if (!userVote) {
        return res
          .status(404)
          .json({ error: "User not found in votes, You are not authorised" });
      } else {
        return next();
      }
    } else {
      return next();
    }
  } catch (err) {
    console.log(err);
  }
};

export default isUserExist;
