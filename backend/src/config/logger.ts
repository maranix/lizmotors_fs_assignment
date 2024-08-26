import fs from "node:fs";
import path from "node:path";
import winston from "winston";
import envConfig from "./env";

const DEBUG_ENV = envConfig.isDebugMode();

const LOG_FOLDER = path.resolve(__dirname, "../../logs");
fs.mkdirSync(LOG_FOLDER, { recursive: true });

// Winston Config
type Transport = winston.transports.FileTransportInstance | winston.transports.ConsoleTransportInstance;

const LOGGER_INFO = {
	levels: {
		error: 0,
		warn: 1,
		info: 2,
		debug: 3,
		http: 4,
		success: 5,
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

const getConsoleTransportLevel = (isDebugMode: boolean): string => {
	return isDebugMode ? "success" : "info";
};

const createTransports = (dir: string, isDebugMode: boolean): Transport[] => {
	const transports: Transport[] = [];

	for (const level of Object.keys(LOGGER_INFO.colors)) {
		const transport = new winston.transports.File({ filename: `${dir}/${level}.log`, level });
		transports.push(transport);
	}

	transports.push(new winston.transports.Console({ level: getConsoleTransportLevel(isDebugMode) }));

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
