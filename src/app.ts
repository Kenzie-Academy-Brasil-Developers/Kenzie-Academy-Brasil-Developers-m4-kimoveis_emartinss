import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRoutes } from "./routes/users.route";
import { errorHandlerMiddleware } from "./middlewares/handleErrors.middleware";
import { loginRoutes } from "./routes/login.route";
import { categoriesRoutes } from "./routes/categories.route";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);

app.use(errorHandlerMiddleware);

export default app;
