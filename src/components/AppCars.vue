<template>
  <ul>
    <li v-for="car in cars" :key="car.id">{{ car.brand }}</li>
  </ul>
</template>

<script>
import { carsService } from '../services/cars.service';

export default {
  name: 'AppCars',
  data() {
    return {
      cars: []
    };
  },
  created() {
    this.cars = carsService.getAll();
  }
};
</script>

<style></style>
