<template>
    <div class="weather-app">
      <!-- Environmental Information -->
      <div v-if="weather">
        <h2>Weather for {{ weather.country }}</h2>
        <p>Temperature in Celsius: {{ temperatureCelsius.toFixed(2) }}°C</p>
        <ul>
          <li v-for="forecast in forecasts" :key="forecast.date">
            Date: {{ forecast.date }}, Temperature: {{ forecast.temperature }}
          </li>
        </ul>
        <button @click="clearWeather">Clear Weather</button>
      </div>
  
      <!-- No Environmental Information -->
      <div v-else>
        <p class="error">Weather data not available.</p>
        <button @click="getWeather">Fetch Weather</button>
      </div>
  
      <!-- Section Header -->
      <h1>Weather App</h1>
  
      <!-- Push the weather button. -->
      <button @click="getWeather">Get Weather</button>
  
      <!-- Provide Country -->
      <p v-if="weather">Country: {{ weather.country }}</p>
  
      <!-- Temperature Circle -->
      <div v-if="weather" class="temperature-circle">
        <p class="bold-text">Weather for India</p>
        <p class="bold-text temperature">{{ temperatureCelsius.toFixed(1) }}°</p>
      </div>
  
      <!-- Send Out An Error Message -->
      <div :class="{ 'error': error }">Error Message</div>
  
      <!-- Displaying a List -->
      <ul>
        <!-- Display Object Specifications -->
        <li v-for="(value, key) in weather" :key="key">{{ key }}: {{ value }}</li>
  
        <!-- Make a Range -->
        <li v-for="n in 5" :key="n">Range Item {{ n }}</li>
      </ul>
  
      <!-- v-for on <template> -->
      <ul>
        <li v-for="forecast in forecasts" :key="forecast.date">
          {{ forecast.date }}: {{ forecast.temperature }}
        </li>
      </ul>
  
      <!-- v-for with v-if -->
      <ul>
        <li v-for="forecast in filteredForecasts" :key="forecast.date">
          Warm Day: {{ forecast.date }}, Temperature: {{ forecast.temperature }}
        </li>
      </ul>
  
      <!-- Element for weather forecasts -->
      <WeatherForecast
        v-for="(forecast, index) in forecasts"
        :key="index"
        :forecast="forecast"
      />
  
      <!-- Conditions for Form Input -->
      <div>
        <label for="text-input">Text Input:</label>
        <input v-model="textInput" type="text" id="text-input" />
  
        <label for="checkbox-input">Checkbox:</label>
        <input v-model="isChecked" type="checkbox" id="checkbox-input" />
  
        <label for="radio-input1">Radio 1:</label>
        <input v-model="selectedRadio" type="radio" id="radio-input1" value="Option 1" />
  
        <label for="radio-input2">Radio 2:</label>
        <input v-model="selectedRadio" type="radio" id="radio-input2" value="Option 2" />
  
        <label for="select-input">Select:</label>
        <select v-model="selectedOption" id="select-input">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
  
        <label for="textarea-input">Textarea:</label>
        <textarea v-model="textareaInput" id="textarea-input"></textarea>
      </div>
    </div>
    <div class="custom-slot">
      <slot name="custom-content"></slot>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  // Props
  const props = defineProps({
    initialWeather: Object,
  });
  
  // Emits
  const emits = defineEmits(['weather-cleared']);
  
  // Data
  const weather = ref(props.initialWeather);
  const forecasts = ref([]);
  const temperatureCelsius = ref(0);
  
  // Methods
  const getWeather = () => {
    // Simulate fetching weather data
    weather.value = { country: 'INDIA', temperature: 21.1 };
    forecasts.value = [
      { date: '2023-04-24', temperature: 24 },
      { date: '2023-04-25', temperature: 22 },
      { date: '2023-04-26', temperature: 26 },
    ];
  };
  
  const clearWeather = () => {
    weather.value = null;
    forecasts.value = [];
    // To alert the parent, send a custom event.
    emits('weather-cleared');
  };
  
  // Watcher
  watch(weather, () => {
    if (weather.value) {
      temperatureCelsius.value = weather.value.temperature;
    }
  });
  </script>
  
  <style scoped>
  /* WeatherApp.vue component's styling using CSS */
  .weather-app {
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  .bold-text {
    font-weight: bold;
  }
  
  .temperature-circle {
    background-color: rgba(216, 205, 208, 0.5);
    border-radius: 50%;
    padding: 20px;
    text-align: center;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: center;
    align-items: center;
  }
  
  .temperature {
    font-size: 24px;
    margin-top: 10px;
  }
  
  .scroll-container {
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
  }
  
  .custom-slot {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  