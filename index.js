// var weatherText = getElementsById('#citydisplay')
// console.log(weatherText);

var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#searchbtn');
var city = document.querySelector('#citydisplay')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humidity = document.querySelector('#humidity')
var uvIndex = document.querySelector('#UVIndex')

btn.addEventListener('click', function () {
    console.log(btn);
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&exclude={part}&appid={180208500378a70366e858082ab1a71c}')
        .then(response => {
            return response.json();
        })
        .then(data => {
            var nameval = data['name']
            var temperature = data['current.temp']
            var windspd = data['current.wind_speed']
            var hmdty = data['current.humidity']
            var uvInd = data['current.uvi']
            //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${temperature} C</span>`
            wind.innerHTML = `Wind Speed: <span>${windspd} km/h<span>`
            humidity.innerHTML = `Humidity: <span>${hmdty} km/h<span>`
            humidity.innerHTML = `UV Index: <span>${uvInd} km/h<span>`
        })
    });
