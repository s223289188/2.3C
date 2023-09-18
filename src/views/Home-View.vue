<template>
  <div class="weather-app">
    
    <WeatherApp :initialWeather="initialWeather">
      <!-- Insert personal information into the specially created slot by clicking here. -->
      <template #custom-content>
        <p>This is original content that has been added to the Weather App feature.</p>
      </template>
    </WeatherApp>
  </div>
</template>

<script>
import WeatherApp from '@/components/weather-app.vue';

export default {
  name: 'HomeView', 
  components: {
    WeatherApp,
  },
  data() {
    return {
      initialWeather: null, 
    };
  },
};
</script>
