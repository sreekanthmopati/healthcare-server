import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Access denied. No token provided." });
    return; // 🔴 Ensure we return here to prevent calling `next()`
  }

  try {
    const secret = process.env.JWT_SECRET || "your_secret_key";
    const decoded = jwt.verify(token, secret);
    
    (req as AuthenticatedRequest).user = decoded;
    
    next(); // ✅ Only call next() if token is valid
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};