"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorController = void 0;
const calculatorService_1 = __importDefault(require("../services/calculatorService"));
class CalculatorController {
    static calculate(req, res) {
        try {
            const { basketId } = req.params;
            if (!basketId) {
                res.status(500).json({
                    success: false,
                    error: 'Send the basket Id to get the total.'
                });
                return;
            }
            const calculatedPrice = calculatorService_1.default.calculate(basketId);
            const response = {
                success: true,
                data: { calculatedPrice: calculatedPrice }
            };
            res.json(response);
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error'
            });
        }
    }
}
exports.CalculatorController = CalculatorController;
//# sourceMappingURL=calculator.controller.js.map