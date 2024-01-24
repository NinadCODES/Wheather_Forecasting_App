
const apikey = "9072c93ce786f7765e062a9420aaecde";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
//To change the weather icon 
const wheatherIcon = document.querySelector(".wheather-icon");

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();
  //console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";;
}
checkWheather(searchBox.value);
searchBtn.addEventListener("click", () => {
  checkWheather(searchBox.value);
})


