"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basket_controller_1 = require("../controllers/basket.controller");
const router = (0, express_1.Router)();
router.post('/addProduct', basket_controller_1.BasketController.addProduct);
router.delete('/removeProduct/:productId/:basketId', basket_controller_1.BasketController.removeProduct);
exports.default = router;
//# sourceMappingURL=basket.js.map