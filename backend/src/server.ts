import app from "./app";

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
});

const onCloseSignal = () => {
	server.close(() => {
		console.log("Server shutdown");
		process.exit();
	});

	// Force shutdown after 10s
	setTimeout(() => process.exit(1), 10000).unref();
};

process.on("SIGTERM", onCloseSignal);
process.on("SIGINT", onCloseSignal);
