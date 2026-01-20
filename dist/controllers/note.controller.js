"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.getNotes = exports.createNote = void 0;
const service = __importStar(require("../services/note.service"));
// CREATE NOTE
const createNote = async (req, res) => {
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
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to create note",
        });
    }
};
exports.createNote = createNote;
// GET ALL NOTES
const getNotes = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const notes = await service.getAllNotes(userId);
        return res.json(notes);
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to fetch notes",
        });
    }
};
exports.getNotes = getNotes;
// UPDATE NOTE
const updateNote = async (req, res) => {
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
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to update note",
        });
    }
};
exports.updateNote = updateNote;
// DELETE NOTE
const deleteNote = async (req, res) => {
    try {
        const userId = req.userId;
        const noteId = req.params.id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        await service.removeNote(noteId, userId);
        return res.json({ message: "Deleted" });
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to delete note",
        });
    }
};
exports.deleteNote = deleteNote;
