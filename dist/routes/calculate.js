"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calculator_controller_1 = require("../controllers/calculator.controller");
const router = (0, express_1.Router)();
router.get('/calculate/:basketId', calculator_controller_1.CalculatorController.calculate);
exports.default = router;
//# sourceMappingURL=calculate.js.map