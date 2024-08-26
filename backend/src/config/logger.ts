import fs from "node:fs";
import path from "node:path";
import winston from "winston";

const LOG_FOLDER = path.resolve(__dirname, "../../logs");
fs.mkdirSync(LOG_FOLDER, { recursive: true });

const DEBUG_ENV = process.env.NODE_ENV?.toLowerCase() === "Development".toLowerCase();

// Winston Config
type Transport = winston.transports.FileTransportInstance | winston.transports.ConsoleTransportInstance;

const LOGGER_INFO = {
	levels: {
		info: 0,
		debug: 1,
		success: 2,
		http: 3,
		warn: 4,
		error: 5,
	},
	colors: {
		error: "red",
		warn: "yellow",
		info: "cyan",
		success: "green",
		http: "magenta",
		debug: "blue",
	},
};

const createTransports = (dir: string, console: boolean): Transport[] => {
	const transports: Transport[] = [];

	for (const level of Object.keys(LOGGER_INFO.colors)) {
		const transport = new winston.transports.File({ filename: `${dir}/${level}.log`, level });
		transports.push(transport);
	}

	if (console) {
		transports.push(new winston.transports.Console());
	}

	return transports;
};

const transports = createTransports(LOG_FOLDER, DEBUG_ENV);

const format = winston.format.combine(
	winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
	winston.format.colorize({ all: true }),
	winston.format.printf((info) => `${info.timestamp}\t[${info.level}]: ${info.message}`),
);
winston.addColors(LOGGER_INFO.colors);

const logger = winston.createLogger({ level: "error", levels: LOGGER_INFO.levels, format, transports });

export default logger;
