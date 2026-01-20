import { prisma } from "../config/prisma";

export const createNote = (userId: string, title: string, content: string) =>
  prisma.note.create({ data: { title, content, userId } });

export const getNotes = (userId: string) =>
  prisma.note.findMany({ where: { userId } });

export const updateNote = (id: string, userId: string, data: any) =>
  prisma.note.updateMany({ where: { id, userId }, data });

export const deleteNote = (id: string, userId: string) =>
  prisma.note.deleteMany({ where: { id, userId } });
