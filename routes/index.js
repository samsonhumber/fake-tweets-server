import express, { Router } from "express";
import { getAllTweets } from "../models/getTweets.js";
import { postTweet } from "../models/postTweets.js";
import { updateTweetTextById } from "../models/updateTweets.js";
import { deleteTweetById } from "../models/deleteTweets.js";
import { getTweetById } from "../models/getTweetById.js";

const tweetsRouter = express.Router();

tweetsRouter.get("/getTweets", async function (req, res) {
  const result = await getAllTweets();
  const responseObject = { success: true, payload: result };
  res.json(responseObject);
});

tweetsRouter.get("/getTweets/:id", async function (req, res) {
  const id = req.params.id;
  const result = await getTweetById(id);
  const responseObject = { success: true, payload: result };
  res.json(responseObject);
});

tweetsRouter.post("/", async function (req, res) {
  const tweet = req.body
  const result = await postTweet(tweet);
  const responseObject = { success: true, payload: result };
  res.json(responseObject);
});

tweetsRouter.put("/:id", async function (req, res) {
  const id = req.params.id;
  const newTweet = req.body;
  const result = await updateTweetTextById(id, newTweet);
  const responseObject = { success: true, payload: result };
  res.json(responseObject);
});

tweetsRouter.delete("/:id", async function (req, res) {
  const id = req.params.id;
  const result = await deleteTweetById(id);
  const responseObject = { success: true, payload: result };
  res.json(responseObject);
});

export { tweetsRouter };