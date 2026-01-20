import { Request, Response } from "express";
import * as service from "../services/note.service";

// CREATE NOTE
export const createNote = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const { title, content } = req.body || {};

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const note = await service.addNote(userId, title, content);
    return res.status(201).json(note);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create note",
    });
  }
};

// GET ALL NOTES
export const getNotes = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const notes = await service.getAllNotes(userId);
    return res.json(notes);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch notes",
    });
  }
};

// UPDATE NOTE
export const updateNote = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const noteId = req.params.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "Update data is required",
      });
    }

    await service.editNote(noteId, userId, req.body);
    return res.json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update note",
    });
  }
};

// DELETE NOTE
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const noteId = req.params.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await service.removeNote(noteId, userId);
    return res.json({ message: "Deleted" });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete note",
    });
  }
};
