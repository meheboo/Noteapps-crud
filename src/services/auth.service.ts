import bcrypt from "bcryptjs";
import * as repo from "../repository/auth.repository";
import { generateToken } from "../utils/jwt";

export const register = async (email: string, password: string) => {
  const hash = await bcrypt.hash(password, 10);
  return repo.createUser(email, hash);
};

export const login = async (email: string, password: string) => {
  const user = await repo.findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Invalid credentials");

  return { token: generateToken(user.id) };
};
