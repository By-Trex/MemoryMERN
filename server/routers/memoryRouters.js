import express from "express";
import mongoose from "mongoose";
import Memory from "../db/MemoryModel.js";

const router = express.Router();

// Get all Data

router.get("/", async (req, res) => {
  try {
    const memories = await Memory.find();
    res.status(200).json(memories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get single Data

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Memory is not a valid" });

    const memories = await Memory.findById(id);
    if (!memories) return;

    res.status(200).json(memories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Update

router.post("/", async (req, res) => {
  try {
    const memory = req.body;
    if (!memory) res.status(404).json("Body is not a valid");

    const createdmemory = await Memory.create(memory);
    return res.status(201).json(createdmemory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

  res.json({
    title: "posssterrrrrrrrrrrrrrrrrrrrrrrr",
  });
});

//Update

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Memory id is not valid" });

    const { title, content, creator, image } = req.body;

    const updatedMemory = await Memory.findByIdAndUpdate(
      id,
      { title, content, creator, image, _id: id },
      { new: true }
    );

    res.status(200).json(updatedMemory);
  } catch (error) {
    console.log(error.message);
    res.json({ message: "delete a memory" });
  }
});

//delete

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Memory is not a valid" });

    const memory = await Memory.findByIdAndDelete(id);
    res.status(200).json(memory);
  } catch (error) {
    console.log("error", error.message);
    res.status(404).json({ message: "Memory delete failed" });
  }
});

export default router;
