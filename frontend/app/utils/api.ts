export const API_URL = "http://localhost:5000/api";

export type Car = {
  _id?: string;
  carModel: string;
  price: number;
  image: string;
  type: string;
  buildDate?: number;
};

export const fetchCars = async (filters?: any) => {
  const params = new URLSearchParams(filters);
  const res = await fetch(`${API_URL}/cars?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch cars");
  return res.json();
};

export const createCar = async (carData: Car) => {
  const res = await fetch(`${API_URL}/cars`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(carData),
  });
  if (!res.ok) throw new Error("Failed to create car");
  return res.json();
};

export const deleteCarApi = async (id: string) => {
  const res = await fetch(`${API_URL}/cars/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete car");
};

export const loginAdmin = async (credentials: { username: string; password: string }) => {
  const res = await fetch(`${API_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  
  const data = await res.json();
  
  if (!res.ok) {
     throw new Error(data.error || "Login failed");
  }
  return data;
};
