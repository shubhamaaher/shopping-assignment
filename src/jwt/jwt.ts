import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
const JWT_SECRET = "SecretKetDoNotShare";

export default function authenticateJWT(req: Request, res: Response, next: NextFunction){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    res.status(401).json({ message: 'Access Denied: No token provided' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err: jwt.VerifyErrors | null, user: any) => {
    if (err) {
      console.error('JWT Verification Error:', err.message);
      res.status(403).json({ message: 'Access Denied: Invalid token' });
      return;
    }
    next();
  });
    
}