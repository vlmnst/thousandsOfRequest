import { NextFunction, Request, Response } from "express";
import { RequestHandler } from "express-serve-static-core";


export const asyncHandler = <T>( fn: RequestHandler<T> ) => (
    req: Request<T>, res: Response, next: NextFunction
) => {Promise.resolve( fn( req, res, next)).catch( next );}

export const errorHandler = async( error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status( 500 ).json({ message: error.message })
}

