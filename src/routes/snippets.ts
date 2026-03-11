import express from "express";
import Snippet from "../models/Snippet";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const snippet = new Snippet(req.body);
    await snippet.save();
    res.status(201).json(snippet);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const snippets = await Snippet.find();
    res.json(snippets);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch snippets" });
  }
});

// UPDATE by ID
router.put("/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!snippet) return res.status(404).json({ error: "Snippet not found" });
    res.json(snippet);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// DELETE by ID
router.delete("/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findByIdAndDelete(req.params.id);
    if (!snippet) return res.status(404).json({ error: "Snippet not found" });
    res.json({ message: "Snippet deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export default router;
