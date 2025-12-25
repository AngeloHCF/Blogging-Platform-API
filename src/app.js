import express from "express";
import { router as postsRouter } from "./routes/posts.js";
export const app = express();

// Middleware
app.use(express.json());

app.use("/posts", postsRouter);

// Example route
app.get("/", (req, res) => {
  res.send("Blog API running!");
});
