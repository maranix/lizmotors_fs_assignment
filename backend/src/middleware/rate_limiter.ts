import type { Request } from "express";
import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
	limit: 0,
	standardHeaders: true,
	windowMs: 15 * 60,
	keyGenerator: (req: Request) => req.ip as string,
});

export default rateLimiter;
