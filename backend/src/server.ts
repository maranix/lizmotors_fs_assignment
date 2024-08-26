import logger from "./config/logger";
import app from "./app";

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, async () => {
	logger.info(`Listening on PORT: ${PORT}`);
});

const onCloseSignal = () => {
	server.close(() => {
		logger.info(`Listening on PORT: ${PORT}`);
		process.exit();
	});

	// Force shutdown after 10s
	setTimeout(() => process.exit(1), 10000).unref();
};

process.on("SIGTERM", onCloseSignal);
process.on("SIGINT", onCloseSignal);
