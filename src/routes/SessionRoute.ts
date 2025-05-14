import { Router } from "express";
import { SessionController } from "../controllers/SessionController";

const router = Router();

router.get("/verify", SessionController.verifySession);
router.post("/login", SessionController.login);

export default router;