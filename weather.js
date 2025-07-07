const link = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=a451601c7bd22fe020eb7233d7134bc2";

function fetchWeather() {
  const request = new XMLHttpRequest();
  request.open('GET', link, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const obj = JSON.parse(this.response);
      document.getElementById('weather').innerText = obj.weather[0].description;
      document.getElementById('location').innerText = obj.name;
      document.getElementById('temp').innerText = (obj.main.temp - 273.15).toFixed(2);
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    } else {
      console.log("The city data is not available.");
    }
  };
  request.send();
}

// Load data on page load
fetchWeather();