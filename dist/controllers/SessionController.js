"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const SessionService_1 = require("../services/SessionService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class SessionController {
}
exports.SessionController = SessionController;
_a = SessionController;
SessionController.login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({ message: "Username and password are required." });
            return;
        }
        const token = yield SessionService_1.SessionService.login(username, password);
        if (!token) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        res.json({ token });
    }
    catch (error) {
        next(error);
    }
});
SessionController.verifySession = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const token = (_b = req.header("Authorization")) === null || _b === void 0 ? void 0 : _b.split(" ")[1];
        if (!token) {
            res.status(411).json({ message: "Session verification failed" });
            return; // Ensure early return
        }
        const secret = process.env.JWT_SECRET || "your_secret_key";
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.user = decoded;
        // ✅ Send response properly
        res.status(200).json({ message: "Token is valid", user: decoded });
    }
    catch (error) {
        res.status(411).json({ message: "Invalid token" });
    }
});
