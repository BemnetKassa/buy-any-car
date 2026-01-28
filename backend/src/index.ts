dotenv.config();

import express from 'express';
import dotenv from 'dotenv';
import carRoutes from './routes/carRoutes';
import adminRoutes from './routes/adminRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('BuyAnyCar backend is running!');
});

app.use('/api/cars', carRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
