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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const orm_1 = require("../../prisma/orm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
console.log("Initializing Prisma...");
const prisma = new orm_1.PrismaClient({
    log: ["query", "info", "warn", "error"],
});
class SessionService {
    static login(Username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.users.findUnique({
                where: { Username },
            });
            if (!user) {
                throw { status: 400, message: "Invalid credentials" };
            }
            const passwordMatch = yield bcryptjs_1.default.compare(password, user.PasswordHash);
            if (passwordMatch) {
                throw { status: 400, message: "Invalid credentials" };
            }
            console.log("Prisma Query Result:", user);
            // Generate JWT token
            const secret = process.env.JWT_SECRET || "your_secret_key";
            const token = jsonwebtoken_1.default.sign({ userId: user.UserID, role: user.Role }, secret, { expiresIn: "1h" });
            return { token, user };
        });
    }
}
exports.SessionService = SessionService;
