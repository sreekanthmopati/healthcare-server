import { Request, Response, NextFunction } from "express";
import { SessionService } from "../services/SessionService";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export class SessionController {
  static login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        res.status(400).json({ message: "Username and password are required." });
        return;
      }

      const token = await SessionService.login(username, password);

      if (!token) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }

      res.json({ token });
    } catch (error) {
      next(error);
    }
  };

  static verifySession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = req.header("Authorization")?.split(" ")[1];

      if (!token) {
        res.status(411).json({ message: "Session verification failed" });
        return; // Ensure early return
      }
      
      const secret = process.env.JWT_SECRET || "your_secret_key";
      const decoded = jwt.verify(token, secret);
      (req as AuthenticatedRequest).user = decoded;

      // ✅ Send response properly
      res.status(200).json({ message: "Token is valid", user: decoded });
    } catch (error) {
      res.status(411).json({ message: "Invalid token" });
    }
  };
}