/**
 * Using the OpenWeatherMap API fetch the current weather for a giver location and refresh every minute
 */

// TODO:  Add your site or application content here

// EXAMPLE REQUEST
// $.get(
//   "https://api.openweathermap.org/data/2.5/weather",
//   {
//     appid: "<YOUR API KEY>",
//     q: "<LOCATION PROVIDED>"
//   },
//   function(response) {
//     console.log(response); // server response
//   }
// );

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var hpa = document.querySelector('.hpa');
var humidity = document.querySelector('.humidity');
var button = document.querySelector('.submit');

var refresh = false;

// count down variables
var timeLeft = 60;
var elem = document.getElementById('refresh');
var timerId = '';

button.addEventListener('click', getData);

async function getData() {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=50a7aa80fa492fa92e874d23ad061374&q=${input.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var tempValue = data['main']['temp'];
      var tempHpa = data['main']['pressure'];
      var tempHumidity = data['main']['humidity'];
      var nameValue = data['name'];

      main.innerHTML = nameValue;
      temp.innerHTML = `${Number(tempValue - 273.15).toFixed(2)} ℃`;
      hpa.innerHTML = `${tempHpa} hpa`;
      humidity.innerHTML = `${tempHumidity} %`;
      refresh = true;
      timerId = setInterval(countdown, 1000);

      console.log(tempValue);
    })
    .catch((err) => {
      refresh = false;
      alert('Wrong city name!');
    });
}

async function countdown() {
  if (refresh) {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      getData();
      timeLeft = 10;
    } else {
      elem.innerHTML = `Refreshing in ${timeLeft}s`;
      timeLeft--;
    }
  } else {
    elem.innerHTML = '';
  }
}
