import express from "express";

import VotesController from "../controllers/votesController";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess";

const vouteRoute = express.Router();

vouteRoute.post(
  "/create/user",
  VotesController.registerVoter
);
vouteRoute.post(
  "/login/user",
  VotesController.voterLogin
);
vouteRoute.post(
  "/create/vote",verifyToken,
  VotesController.voteUser
);
vouteRoute.get("/one/voted/:id", VotesController.getOneVotedUser);
vouteRoute.get("/all/votes", VotesController.getAllVoteUsers);
vouteRoute.get("/all/users", VotesController.getAllUsers);

export default vouteRoute;
