import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRouter } from "./routes/users.route";

const app = express();
app.use(express.json());

usersRouter.use("/users", usersRouter);

export default app;
