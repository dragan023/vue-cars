<template>
  <div class="container">
    <form @submit.prevent="handleFormSubmit">
      <div class="form-group">
        <label for="brand">Brand</label>
        <input
          type="text"
          class="form-control"
          id="brand"
          placeholder="Brand"
          v-model="car.brand"
        />
      </div>

      <div class="form-group">
        <label for="model">Model</label>
        <input
          type="text"
          class="form-control"
          id="model"
          placeholder="Model"
          v-model="car.model"
        />
      </div>

      <div class="form-group">
        <label for="model">Year</label>
        <select v-model="car.year">
          <option disabled :value="''">Please select year</option>
          <option v-for="year in options" :key="year"> {{ year }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="max-speed">Maximum speed</label>
        <input
          type="number"
          class="form-control"
          id="max-speed"
          placeholder="Maximum speed"
          v-model="car.maxSpeed"
        />
      </div>

      <div class="form-group">
        <label for="number-of-doors">Number of doors</label>
        <input
          type="number"
          class="form-control"
          id="number-of-doors"
          placeholder="Number of doors"
          v-model="car.numberOfDoors"
        />
      </div>

      <div class="form-check">
        <input
          v-model="car.isAutomatic"
          type="checkbox"
          class="form-check-input"
          id="is-automatic"
        />
        <label class="form-check-label" for="is-automatic">Is automatic</label>
      </div>

      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="diesel"
          name="diesel"
          class="custom-control-input"
          value="diesel"
          v-model="car.engine"
        />
        <label class="custom-control-label" for="diesel">Diesel</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="petrol"
          name="petrol"
          class="custom-control-input"
          value="petrol"
          v-model="car.engine"
        />
        <label class="custom-control-label" for="petrol">Petrol</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="electric"
          name="electric"
          class="custom-control-input"
          value="electric"
          v-model="car.engine"
        />
        <label class="custom-control-label" for="electric">Electric</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="hybrid"
          name="hybrid"
          class="custom-control-input"
          value="hybrid"
          v-model="car.engine"
        />
        <label class="custom-control-label" for="hybrid">Hybrid</label>
      </div>

      <button type="submit" class="btn btn-success mr-1">Submit</button>
      <button type="button" @click="handleResetForm" class="btn btn-danger mr-1">
        Reset
      </button>
      <button type="button" @click="handlePreviewForm" class="btn btn-info mr-1">
        Preview
      </button>
    </form>
  </div>
</template>

<script>
import { carsService } from '../services/cars.service';

export default {
  name: 'AddCar',
  data() {
    return {
      car: {
        year: ''
      },
      options: []
    };
  },
  created() {
    this.generateOptions();
  },
  methods: {
    generateOptions() {
      for (let i = 1989; i < 2019; i++) {
        this.options.push(i);
      }
    },
    async handleFormSubmit() {
      const response = await carsService.addCar(this.car);

      if (response) {
        this.$router.push('/cars');
      }
    },
    handlePreviewForm() {
      alert(JSON.stringify(this.car));
    },
    handleResetForm() {
      this.car = {};
    }
  }
};
</script>
