import { HTTP } from './base.service';

export default class CarsService {
  async getAll() {
    const data = await HTTP.get('/cars');

    return data.data;
  }

  async addCar(car) {
    try {
      const data = await HTTP.post('/cars', car);

      return data;
    } catch (error) {
      return false;
    }
  }

  async getCar(id) {
    try {
      const data = await HTTP.get(`/cars/${id}`);

      return data.data;
    } catch (error) {
      return false;
    }
  }

  async editCar(id, car) {
    try {
      const data = await HTTP.put(`/cars/${id}`, car);

      return data.data;
    } catch (error) {
      return false;
    }
  }

  async deleteCar(id) {
    try {
      const data = await HTTP.delete(`/cars/${id}`);

      return data.data;
    } catch (error) {
      return false;
    }
  }
}

export const carsService = new CarsService();
