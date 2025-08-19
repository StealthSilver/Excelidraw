import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded !== "string" && decoded.userId) {
        // @ts-ignore
      req.userId = decoded.userId;
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
}
