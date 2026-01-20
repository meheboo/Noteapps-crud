import * as repo from "../repository/note.repository";

export const addNote = (userId: string, title: string, content: string) =>
  repo.createNote(userId, title, content);

export const getAllNotes = (userId: string) =>
  repo.getNotes(userId);

export const editNote = (id: string, userId: string, data: any) =>
  repo.updateNote(id, userId, data);

export const removeNote = (id: string, userId: string) =>
  repo.deleteNote(id, userId);
