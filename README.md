# BuyAnyCar

Full-stack car marketplace project with:
- Frontend: Next.js 16 + React 19 + Tailwind CSS v4
- Backend: Express + TypeScript + MongoDB Atlas (Mongoose)

## Project Structure

```text
buy any car/
  frontend/   # Next.js application
  backend/    # Express API
```

## Prerequisites

- Node.js 20+
- npm 10+
- MongoDB Atlas cluster and connection string

## 1) Backend Setup

From the backend folder:

```bash
cd backend
npm install
```

Create or update `.env` in `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret
PORT=5000
```

Run backend in development:

```bash
npm run dev
```

Backend default URL:
- `http://localhost:5000`

## 2) Frontend Setup

From the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

Frontend default URL:
- `http://localhost:3000`

## Tailwind CSS Note

This project uses Tailwind CSS v4 with `@tailwindcss/postcss`.
Tailwind v4 does not require `npx tailwindcss init -p` in many setups.

If dependencies are broken, do a clean reinstall inside `frontend/`:

```bash
# Windows PowerShell
rd /s /q node_modules
Remove-Item package-lock.json
npm install
```

## API Overview

Base URL: `http://localhost:5000/api`

### Admin

- `POST /admin/register`
  - Body: `{ "username": "admin", "password": "admin123" }`
- `POST /admin/login`
  - Body: `{ "username": "admin", "password": "admin123" }`
  - Response includes JWT token

### Cars

- `GET /cars`
  - Query params (optional):
    - `search`
    - `type`
    - `minPrice`, `maxPrice`
    - `minYear`, `maxYear`
- `POST /cars`
  - Body example:
    ```json
    {
      "carModel": "Toyota Camry",
      "price": 25000,
      "image": "https://example.com/car.jpg",
      "type": "Sedan",
      "buildDate": 2021
    }
    ```
- `PUT /cars/:id`
- `DELETE /cars/:id`

## Useful Scripts

### Backend (`backend/package.json`)
- `npm run dev` - start API with nodemon
- `npm run build` - compile TypeScript to `dist/`
- `npm start` - run compiled server

### Frontend (`frontend/package.json`)
- `npm run dev` - start Next.js dev server
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - run linting

## Current Status

- MongoDB Atlas connection integrated in backend
- Admin auth endpoints implemented
- Car CRUD endpoints implemented
- Frontend and backend run independently

## Next Recommended Improvements

- Add auth middleware to protect admin-only car write operations
- Move secrets to secure environment management
- Add request validation (Zod/Joi)
- Add integration tests for API routes
