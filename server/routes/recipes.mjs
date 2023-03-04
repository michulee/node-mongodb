import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 recipes
router.get("/", async (req, res) => {
  // db.collection("<ENDPOINT>")
  console.log("string: ", process.env.ATLAS_URI)
  const collection = await db.collection("recipes");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// Fetches the latest recipes
router.get("/latest", async (req, res) => {
  // let collection = await db.collection("recipes");
  // let results = await collection.aggregate([
  //   {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
  //   {"$sort": {"date": -1}},
  //   {"$limit": 3}
  // ]).toArray();
  // res.send(results).status(200);
});

// Get a single post
router.get("/:id", async (req, res) => {
  // let collection = await db.collection("recipes");
  // let query = {_id: ObjectId(req.params.id)};
  // let result = await collection.findOne(query);

  // if (!result) res.send("Not found").status(404);
  // else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection("recipes");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204); //send to db
});

// Update the post with a new comment
router.patch("/comment/:id", async (req, res) => {
  // const query = { _id: ObjectId(req.params.id) };
  // const updates = {
  //   $push: { comments: req.body }
  // };

  // let collection = await db.collection("recipes");
  // let result = await collection.updateOne(query, updates);

  // res.send(result).status(200);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  // const query = { _id: ObjectId(req.params.id) };

  // const collection = db.collection("recipes");
  // let result = await collection.deleteOne(query);

  // res.send(result).status(200);
});

export default router;
