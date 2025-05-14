"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PatientsController_1 = require("../controllers/PatientsController");
const router = express_1.default.Router();
router.get("/", PatientsController_1.getAllPatients);
router.get("/:id", PatientsController_1.getPatientRecords);
router.post("/create", PatientsController_1.createPatientApi);
exports.default = router;
