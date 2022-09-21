import express, { Router } from "express";
import { getTheTime } from "../models/getTweets.js";

const reviewsRouter = express.Router();

reviewsRouter.get("/telltime", async function (req, res) {
  const result = await getTheTime();
  const responseObject = { success: true, payload: result };
  res.json(responseObject);
});

export { reviewsRouter };