import votes from "../models/votes";
import kakaUser from "../models/KakaUser";
import TokenAuth from "../helpers/tokenAuth";

class VotesController {
  //create voters data
  static async registerVoter(req, res) {
    const numberUsers = await kakaUser.find();
    req.body.code =
      numberUsers.length < 10
        ? "000" + (numberUsers.length + 1)
        : "00" + (numberUsers.length + 1);
    const Voter = await kakaUser.create(req.body);

    if (!Voter) {
      return res.status(404).json({ error: "failed to register User" });
    }

    return res.status(200).json({
      message: "User Created successfully ",
      data: Voter,
    });
  }
  //get all users
  static async getAllUsers(req, res) {
    const allUsers = await kakaUser.find();

    if (!allUsers) {
      return res.status(404).json({ error: "failed to fetch users" });
    }

    return res.status(200).json({
      message: "Users get successfully",
      result: allUsers.length,
      data: allUsers,
    });
  }
  //get all users
  static async voterLogin(req, res) {
    const vote = await kakaUser.findOne({ code: req.body.code });

    if (!vote) {
      return res.status(404).json({ error: "failed to get  user vote" });
    }

    const token = TokenAuth.tokenGenerator({ user: vote });

    return res.status(200).json({
      message: "voter get successfully",
      data: vote,
      token: token,
    });
  }
  //Vote users all tours
  static async voteUser(req, res) {
    const { uwatowe } = req.body;
    const uwatoye = req.user._id;
    const checkYatoye = await kakaUser.findById(uwatoye);
    if (checkYatoye.yatoye) {
      return res.status(404).json({ error: "Wasoje gutora, Murakoze." });
    }
    const itora = await votes.create({ uwatowe: uwatowe, uwatoye: uwatoye });

    if (!itora) {
      return res.status(404).json({ error: "failed to vote user" });
    }

    await kakaUser.findByIdAndUpdate(uwatowe, { yatowe: true }, { new: true });
    await kakaUser.findByIdAndUpdate(uwatoye, { yatoye: true }, { new: true });

    return res.status(200).json({
      message: "vote  user, successfully",
      data: itora,
    });
  }

  //get all tours
  static async getOneVotedUser(req, res) {
    const id = req.params.id;

    const userRecheck = await kakaUser.findById(id);
    if (!userRecheck) {
      return res.status(404).json({ error: "failed to fetch user" });
    } else if (!userRecheck.recheck) {
      await kakaUser.findByIdAndUpdate(id, { recheck: true }, { new: true });

      const oneVotedUser = await votes.findOne({ uwatoye: id });

      if (!oneVotedUser) {
        return res.status(404).json({ error: "failed to fetch user" });
      }
      return res.status(200).json({
        message: "Voted User get successfully",
        data: oneVotedUser,
      });
    } else {
      return res.status(404).json({ error: "You have arleady Rechecked!" });
    }
  }

  //get all tours
  static async getAllVoteUsers(req, res) {
    const allVotesUsers = await votes.find();

    if (!allVotesUsers) {
      return res.status(404).json({ error: "failed to fetch users" });
    }

    return res.status(200).json({
      message: "Votes Users get successfully",
      result: allVotesUsers.length,
      data: allVotesUsers,
    });
  }
}

export default VotesController;
