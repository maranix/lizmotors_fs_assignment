import express from "express";
import requestLogger from "./middleware/requestLogger";
import helmet from "helmet";
import rateLimiter from "./middleware/rateLimiter";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(helmet());
app.use(rateLimiter);
app.use(requestLogger);
app.use(errorHandler);

app.get("/", (_, res) => {
	res.status(200).json({ message: "Pong!" });
});

export default app;
