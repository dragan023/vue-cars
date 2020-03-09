import axios from 'axios';

export default class CarsService {
  async getAll() {
    const data = await axios.get('http://localhost:3000/api/cars');

    return data;
  }
}

export const carsService = new CarsService();
