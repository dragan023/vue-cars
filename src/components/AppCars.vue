<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="car in cars" :key="car.id">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ car.brand }}</h5>
            <p class="card-text">
              {{ car.model }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  async created() {
    this.cars = await this.getCars;
  },
  computed: {
    getCars() {
      return carsService.getAll();
    }
  }
};
</script>
