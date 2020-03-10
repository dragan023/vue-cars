import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AppCars from './components/AppCars';
import AddCar from './components/AddCar';

const routes = [
  { path: '/', redirect: '/cars' },
  { path: '/cars', component: AppCars },
  { path: '/add', component: AddCar },
  { path: '/edit/:id', component: AddCar }
];

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
