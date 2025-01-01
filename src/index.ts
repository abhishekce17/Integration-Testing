import express from "express";
import { client } from "./db";

export const app = express();

app.use(express.json());

app.post("/add", async (req, res) => {
  const { a, b } = req.body;
  if (a > 1000000 || b > 1000000) {
    res.status(422).json({
      message: "Sorry we dont support big numbers",
    });
    return;
  }
  const result = a + b;
  const request = await client.request.create({
    data: {
      a: a,
      b: b,
      answer: result,
      type: "ADD",
    },
  });
  res.json({ result, id: request.id });
});
