import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRoutes } from "./routes/users.route";
import { errorHandlerMiddleware } from "./middlewares/handleErrors.middleware";
import { loginRoutes } from "./routes/login.route";
import { categoriesRoutes } from "./routes/categories.route";
import { realEstateRoutes } from "./routes/realEstate.route";
import { scheduleRoutes } from "./routes/schedules.route";

const app = express();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }), express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", scheduleRoutes);

app.use(errorHandlerMiddleware);

export default app;
