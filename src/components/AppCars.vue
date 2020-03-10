<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="car in cars" :key="car.id">
        <div class="card mb-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ car.brand }}</h5>
            <p class="card-text">
              {{ car.model }}
            </p>
            <div class="d-flex">
              <button @click="handleEditCar(car.id)" class="btn btn-info ml-2">
                Edit
              </button>
              <button
                @click="handleDeleteCar(car.id)"
                class="btn btn-danger ml-2"
              >
                Delete
              </button>
            </div>
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
      cars: [],
      deleteable: ''
    };
  },
  async created() {
    this.cars = await this.getCars;
  },
  methods: {
    handleEditCar(id) {
      this.$router.push(`/edit/${id}`);
    },
    handleDeleteCar(id) {
      this.deleteable = prompt('Are you sure?');
      if (this.deleteable.toLowerCase() === 'yes') {
        carsService.deleteCar(id);
        location.reload();
      }
    }
  },
  computed: {
    getCars() {
      return carsService.getAll();
    }
  }
};
</script>
