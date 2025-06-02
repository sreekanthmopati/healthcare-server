"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const orm_1 = require("../../prisma/orm");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
console.log("Initializing Prisma...");
const prisma = new orm_1.PrismaClient({
    log: ["query", "info", "warn", "error"],
});
class SessionService {
    static async login(Username, password) {
        const user = await prisma.users.findUnique({
            where: { Username },
        });
        if (!user) {
            throw { status: 400, message: "Invalid credentials" };
        }
        // const passwordMatch = await bcrypt.compare(password, user.PasswordHash);
        const passwordMatch = password === user.PasswordHash;
        if (!passwordMatch) {
            throw { status: 400, message: "Invalid credentials" };
        }
        console.log("Prisma Query Result:", user);
        // Generate JWT token
        const secret = process.env.JWT_SECRET || "your_secret_key";
        const token = jsonwebtoken_1.default.sign({ userId: user.UserID, role: user.Role }, secret, { expiresIn: "1h" });
        return { token, user };
    }
}
exports.SessionService = SessionService;
