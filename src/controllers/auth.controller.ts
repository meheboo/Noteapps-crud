import { Request, Response } from "express";
import * as service from "../services/auth.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const result = await service.register(email, password);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Registration failed",
      error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const result = await service.login(email, password);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error,
    });
  }
};
