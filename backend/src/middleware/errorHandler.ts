import type { RequestHandler, Request, Response, ErrorRequestHandler, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const unexpectedRequest: RequestHandler = (_req: Request, res: Response) => {
	res.sendStatus(StatusCodes.NOT_FOUND);
};

const addErrorToRequestLog: ErrorRequestHandler = (err, _req: Request, res: Response, next: NextFunction) => {
	res.locals.err = err;
	next(err);
};

export default () => [unexpectedRequest, addErrorToRequestLog];
