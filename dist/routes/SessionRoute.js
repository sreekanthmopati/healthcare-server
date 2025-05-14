"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SessionController_1 = require("../controllers/SessionController");
const router = (0, express_1.Router)();
router.get("/verify", SessionController_1.SessionController.verifySession);
router.post("/login", SessionController_1.SessionController.login);
exports.default = router;
