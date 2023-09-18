<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
    
    <!-- The WeatherApp element is available here. -->
    <WeatherApp :initialWeather="initialWeather">
      <!-- Inject custom content into the custom slot -->
      <template #custom-content>
        <p>introducing the specific content inside the Weather App module.</p>
      </template>
    </WeatherApp>
  </div>
</template>

<script>
import WeatherApp from './components/weather-app.vue';

export default {
  components: {
    WeatherApp,
  },
  data() {
    return {
      initialWeather: null, // If necessary, start with your weather forecast.
    };
  },
};
</script>


