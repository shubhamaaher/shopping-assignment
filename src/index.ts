import express from "express";
import cors from "cors";
import ProductRoute from './routes/products';
import BasketRoute from './routes/basket';
import CalculateRouter from './routes/calculate';
import authenticateJWT  from './jwt/jwt';
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';


const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());

app.post('/api/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'pass') {
    const userPayload = { id: 'user123' };
    const token = jwt.sign(userPayload, "SecretKetDoNotShare", { expiresIn: '2h' });

    res.json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


app.use('/api/products', authenticateJWT, ProductRoute);
app.use('/api/basket', authenticateJWT, BasketRoute);
app.use('/api/calculator', authenticateJWT, CalculateRouter);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction)=>{
    console.error(err.stack);
    res.status(500).json({
        success:false,
        error:`Internal Server error`
    });
});

app.listen(PORT, ()=>{
    console.log(`Server started and listening on port ${PORT}`);
});