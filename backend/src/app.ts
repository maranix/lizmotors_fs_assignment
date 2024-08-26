import express from "express";
import requestLogger from "./middleware/request_logger";

const app = express();

app.use(requestLogger);

app.get("/", (_, res) => {
	res.status(200).json({ message: "Pong!" });
});

export default app;
