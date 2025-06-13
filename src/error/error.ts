import { NextFunction, Request, Response } from "express";



export function errorHandler(err: any, req: Request, res: Response, next: NextFunction){
    const status = err.status || 500;
    const message = err.message;
    console.error(err);
    res.status(status).json({ message: message || "Internal Server Error" });
}