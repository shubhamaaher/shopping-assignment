"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("./routes/products"));
const basket_1 = __importDefault(require("./routes/basket"));
const calculate_1 = __importDefault(require("./routes/calculate"));
const jwt_1 = __importDefault(require("./jwt/jwt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        const userPayload = { id: 'user123' };
        const token = jsonwebtoken_1.default.sign(userPayload, "SecretKetDoNotShare", { expiresIn: '2h' });
        res.json({ message: 'Login successful', token });
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
app.use('/api/products', jwt_1.default, products_1.default);
app.use('/api/basket', jwt_1.default, basket_1.default);
app.use('/api/calculator', jwt_1.default, calculate_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: `Internal Server error`
    });
});
app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map