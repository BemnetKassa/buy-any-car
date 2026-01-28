import { Request, Response } from 'express';
import { Car } from '../models/Car';
import { v4 as uuidv4 } from 'uuid';

let cars: Car[] = [];

export const getCars = (req: Request, res: Response) => {
  // Filtering logic
  let filtered = [...cars];
  const { search, type, minPrice, maxPrice, minBuildDate, maxBuildDate } = req.query;

  if (search) {
    filtered = filtered.filter(car => car.model.toLowerCase().includes((search as string).toLowerCase()));
  }
  if (type) {
    filtered = filtered.filter(car => car.type === type);
  }
  if (minPrice || maxPrice) {
    filtered = filtered.filter(car => {
      const price = Number(car.price);
      return (!minPrice || price >= Number(minPrice)) && (!maxPrice || price <= Number(maxPrice));
    });
  }
  if (minBuildDate || maxBuildDate) {
    filtered = filtered.filter(car => {
      const buildDate = Number(car.buildDate || 0);
      return (!minBuildDate || buildDate >= Number(minBuildDate)) && (!maxBuildDate || buildDate <= Number(maxBuildDate));
    });
  }
  res.json(filtered);
};

export const addCar = (req: Request, res: Response) => {
  const { model, price, image, type, buildDate } = req.body;
  if (!model || !price || !image) {
    return res.status(400).json({ error: 'Model, price, and image are required.' });
  }
  const newCar: Car = { id: uuidv4(), model, price, image, type, buildDate };
  cars.push(newCar);
  res.status(201).json(newCar);
};

export const deleteCar = (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = cars.findIndex(car => car.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Car not found' });
  cars.splice(idx, 1);
  res.status(204).send();
};

export const updateCar = (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = cars.findIndex(car => car.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Car not found' });
  cars[idx] = { ...cars[idx], ...req.body };
  res.json(cars[idx]);
};
