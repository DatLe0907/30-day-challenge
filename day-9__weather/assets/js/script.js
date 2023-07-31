let search = document.querySelector(".weather__input"),
  city = document.querySelector(".city"),
  country = document.querySelector(".country"),
  time = document.querySelector(".time"),
value = document.querySelector(".value"),
  shortDescr = document.querySelector(".weather__short-dcr"),
  moreDescr = document.querySelector(".weather__more-dcr"),
  visibility = document.querySelector(".visibility span"),
  wind = document.querySelector(".wind span"),
  sun = document.querySelector(".sun span"),
  content = document.querySelector(".weather__content"),
  body = document.querySelector("body");

async function changeWeatherUI(input) {
  let capitalValue = input;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&units=metric&appid=3c214645a5d1dc76537cea3c5c035b7d`;

  let data = await fetch(apiURL).then(function (res) {
    return res.json();
  });
  if (data.cod === 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    temp = (data.main.temp).toFixed();
    value.innerText = temp;
    shortDescr.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleString("vie");
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerHTML = data.main.humidity + "m";

    body.setAttribute("class", "hot");
    if (temp <= 25) {
      body.setAttribute("class", "warm");
    }
    if (temp <= 22) {
      body.setAttribute("class", "cool");
    }
    if (temp <= 19) {
      body.setAttribute("class", "cold");
    }
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    changeWeatherUI(search.value.trim());
    search.value = '';
  }
});

changeWeatherUI("ha noi");
