import { PrismaClient } from "../../prisma/orm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

console.log("Initializing Prisma...");
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export class SessionService {
  static async login(Username: string, password: string) {
    const user = await prisma.users.findUnique({
      where: { Username },
    });
    
    if (!user) {
      throw { status: 400, message: "Invalid credentials" };
    }
    
    const passwordMatch = await bcrypt.compare(password, user.PasswordHash);
    if (passwordMatch) {
      throw { status: 400, message: "Invalid credentials" };
    }
    console.log("Prisma Query Result:", user);
    // Generate JWT token
    const secret = process.env.JWT_SECRET || "your_secret_key";
    const token = jwt.sign(
      { userId: user.UserID, role: user.Role },
      secret,
      { expiresIn: "1h" }
    );

    return { token, user };
  }
}