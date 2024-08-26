import { configDotenv } from "dotenv";

configDotenv();

const environments = ["PRODUCTION", "DEVELOPMENT"] as const;
type EnvironmentType = (typeof environments)[number];

interface EnvConfig {
	NODE_ENV: EnvironmentType;
	HOST: string;
	PORT: number;
	RATE_LIMIT_MAX_REQUESTS: number;
	RATE_LIMIT_WINDOW_MS: number;

	isDebugMode(): boolean;
	toString(): EnvConfigStr;
}
type EnvConfigStr = Omit<EnvConfig, "isDebugMode" | "toString">;

const DEFAULT_PORT = "8080";
const DEFAULT_ENVIRONMENT = "DEVELOPMENT";
const DEFAULT_RATE_LIMIT_MAX_REQUESTS = "100";
const DEFAULT_RATE_LIMIT_WINDOW_MS = "1000";
/**
 * Returns node EnvironmentType from given string;
 *
 * @remarks
 * Possible values {@link environments | EnvironmentType}.
 *
 * @param env - string to match.
 * @returns EnvironmentType
 * @defaultValue `DEVELOPMENT`
 */
const getEnvType = (env: string | undefined): EnvironmentType => {
	if (!env) return DEFAULT_ENVIRONMENT;

	const type = env.toUpperCase() as EnvironmentType;
	if (environments.includes(type)) {
		return type;
	}

	return DEFAULT_ENVIRONMENT;
};

const envConfig: EnvConfig = {
	NODE_ENV: getEnvType(process.env.NODE_ENV),
	HOST: process.env.HOST || "localhost",
	PORT: Number.parseInt(process.env.PORT || DEFAULT_PORT, 10),
	RATE_LIMIT_MAX_REQUESTS: Number.parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || DEFAULT_RATE_LIMIT_MAX_REQUESTS, 10),
	RATE_LIMIT_WINDOW_MS: Number.parseInt(process.env.RATE_LIMIT_WINDOW_MS || DEFAULT_RATE_LIMIT_WINDOW_MS, 10),

	isDebugMode(): boolean {
		return this.NODE_ENV === "DEVELOPMENT";
	},
	toString(): EnvConfigStr {
		return {
			NODE_ENV: this.NODE_ENV,
			HOST: this.HOST,
			PORT: this.PORT,
			RATE_LIMIT_MAX_REQUESTS: this.RATE_LIMIT_MAX_REQUESTS,
			RATE_LIMIT_WINDOW_MS: this.RATE_LIMIT_WINDOW_MS,
		};
	},
};

export default envConfig;
