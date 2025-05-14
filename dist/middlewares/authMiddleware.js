"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Access denied. No token provided." });
        return; // 🔴 Ensure we return here to prevent calling `next()`
    }
    try {
        const secret = process.env.JWT_SECRET || "your_secret_key";
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.user = decoded;
        next(); // ✅ Only call next() if token is valid
    }
    catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};
exports.authenticateToken = authenticateToken;
