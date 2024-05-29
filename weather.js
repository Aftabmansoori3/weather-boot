// third.js
document.getElementById('search-btn').addEventListener('click', function() {
    const location = document.getElementById('Location-input').value.trim().toLowerCase();
    if (location === 'delhi') {
      getWeather('Delhi');
    } else {
      alert('Please enter "Delhi" to see the weather data.');
    }
  });
  
  function getWeather(location) {
    const apiKey = '3ee4b41a80304abd265436961ede72b0'; // Your provided API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          displayWeather(data);
        } else {
          alert('City not found. Please enter "Delhi".');
        }
      })
      .catch(error => {
        console.error('Error fetching the weather data:', error);
        alert('Error fetching the weather data. Please try again later.');
      });
  }
  
  function displayWeather(data) {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherCondition = data.weather[0].description;
    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('Humidity').textContent = humidity;
    document.getElementById('Wind-Speed').textContent = windSpeed;
    document.getElementById('weather-condition').textContent = weatherCondition;
    document.getElementById('weather-icon').src = weatherIcon;
  
    document.getElementById('weather-info').classList.remove('hidden');
  }
  