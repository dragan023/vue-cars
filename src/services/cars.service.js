import { HTTP } from './base.service';

export default class CarsService {
  async getAll() {
    const data = await HTTP.get('/cars');

    return data.data;
  }

  async addCar(car) {
    const data = await HTTP.post('/cars', car);

    return data;
  }
}

export const carsService = new CarsService();
