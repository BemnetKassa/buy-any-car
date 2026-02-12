import { Request, Response } from 'express';
import AdminUser from '../models/AdminUser';
import jwt from 'jsonwebtoken';

// Generate JWT Token
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '30d',
  });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await AdminUser.findOne({ username });

    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        token: generateToken(user._id as unknown as string),
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
     res.status(500).json({ error: 'Server error' });
  }
};

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    try {
      const userExists = await AdminUser.findOne({ username });
  
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      const user = await AdminUser.create({
        username,
        password,
      });
  
      if (user) {
        res.status(201).json({
          _id: user._id,
          username: user.username,
          token: generateToken(user._id as unknown as string),
        });
      } else {
        res.status(400).json({ error: 'Invalid user data' });
      }
    } catch (error) {
       res.status(500).json({ error: 'Server error' }); 
    }
  };
