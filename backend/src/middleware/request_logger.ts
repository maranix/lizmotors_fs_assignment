import logger from "../config/logger";
import type { Request, Response, NextFunction } from "express";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
	let isFinished = false;

	const start = Date.now();
	const { method, url } = req;
	const { statusCode } = res;

	res.on("finish", () => {
		isFinished = true;
		const timeTaken = Date.now() - start;

		logger.http(`${method} ${url} ${statusCode} ${timeTaken}ms`);
	});

	res.on("close", () => {
		if (!isFinished) {
			logger.warn(`${req.method} ${req.url} - Connection closed before response.`);
		}
	});

	res.on("error", (err) => {
		logger.error(`${req.method} ${req.url} - ${err.message}`);
	});

	next();
};

export default requestLogger;
