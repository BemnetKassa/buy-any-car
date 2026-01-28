import { Request, Response } from 'express';
import { AdminUser } from '../models/AdminUser';

const adminUsers: AdminUser[] = [
  { username: 'admin', password: 'admin123' }
];

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const found = adminUsers.find(u => u.username === username && u.password === password);
  if (found) {
    // In a real app, use JWT or session
    return res.json({ success: true, username });
  }
  res.status(401).json({ error: 'Invalid credentials' });
};
