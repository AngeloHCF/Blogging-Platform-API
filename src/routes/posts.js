import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.get("/", async (req, res) => {
  try {
    let result;
    const { id, title } = req.query;

    if (title) {
      result = await pool.query("SELECT * FROM posts WHERE TITLE ILIKE $1", [
        `%${title}%`,
      ]);
    } else if (id) {
      result = await pool.query("SELECT * FROM public.posts WHERE id = $1", [
        id,
      ]);
    } else {
      result = await pool.query("SELECT * FROM public.posts");
    }

    res.json(result.rows);
  } catch (error) {
    console.error(`There was an error ${error}`);
  }
});

router.post("/", async (req, res) => {
  const { title, content, category, tags } = req.body;

  const result = await pool.query(
    "INSERT INTO posts (title, content, category, tags) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, content, category, tags]
  );
  res.json(result.rows);
});

router.put("/", async (req, res) => {
  const { id, title, content } = req.body;

  const result = await pool.query(
    "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *",
    [title, content, id]
  );

  res.json(result.rows[0]);
});

router.delete("/", async (req, res) => {
  const { id } = req.body;

  const result = await pool.query(
    "DELETE FROM posts WHERE id = $1 RETURNING *",
    [id]
  );

  res.json(result.rows[0]);
});
