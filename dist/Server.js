"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const SessionRoute_1 = __importDefault(require("./routes/SessionRoute"));
const DashboardRoute_1 = __importDefault(require("./routes/DashboardRoute"));
const PatientRoute_1 = __importDefault(require("./routes/PatientRoute"));
const CaseSheetRoutes_1 = __importDefault(require("./routes/CaseSheetRoutes"));
const DepartmentsRoute_1 = __importDefault(require("./routes/DepartmentsRoute"));
const WardRoutes_1 = __importDefault(require("./routes/WardRoutes"));
const AdmissionRoutes_1 = __importDefault(require("./routes/AdmissionRoutes"));
dotenv_1.default.config();
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
const PORT = process.env.PORT || 5000;
//const caseSheetRoutes = require("./routes/caseSheetRoutes");
console.log("Registering routes...");
app.use(express_1.default.json());
app.use("/auth", SessionRoute_1.default);
app.use("/dashboard", DashboardRoute_1.default);
app.use("/patients", PatientRoute_1.default);
app.use("/casesheets", CaseSheetRoutes_1.default);
app.use("/depts", DepartmentsRoute_1.default);
app.use("/accomdation", WardRoutes_1.default);
app.use("/adms", AdmissionRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err); // Logs error to console
    res.status(err.status || 500).json({
        message: err.message || "Something went wrong",
    });
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
