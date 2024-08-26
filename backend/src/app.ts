import express from "express";
import requestLogger from "./middleware/request_logger";
import helmet from "helmet";
import rateLimiter from "./middleware/rate_limiter";

const app = express();

app.use(helmet());
app.use(rateLimiter);
app.use(requestLogger);

app.get("/", (_, res) => {
	res.status(200).json({ message: "Pong!" });
});

export default app;
