import { Request, Response } from 'express';
import Car from '../models/Car';

export const getCars = async (req: Request, res: Response) => {
  try {
    const { search, type, minPrice, maxPrice, minYear, maxYear } = req.query;
    
    let query: any = {};

    if (search) {
      query.model = { $regex: search, $options: 'i' };
    }
    if (type && type !== 'All') {
      query.type = type;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (minYear || maxYear) {
      query.buildDate = {};
      if (minYear) query.buildDate.$gte = Number(minYear);
      if (maxYear) query.buildDate.$lte = Number(maxYear);
    }

    const cars = await Car.find(query).sort({ created_at: -1 });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const addCar = async (req: Request, res: Response) => {
  try {
    const { model, price, image, type, buildDate } = req.body;
    if (!model || !price || !image || !type) {
      return res.status(400).json({ error: 'Model, price, image, and type are required.' });
    }
    const newCar = await Car.create({ model, price, image, type, buildDate });
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Car.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Car not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const updateCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await Car.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Car not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
