import express from "express";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.routes";
import noteRoutes from "./routes/note.routes";
import { swaggerSpec } from "./config/swagger";

const app = express();

// 🔴 REQUIRED middleware
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

export default app;
