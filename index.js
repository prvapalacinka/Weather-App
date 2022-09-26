// var weatherText = getElementsById('#citydisplay')
// console.log(weatherText);

var inputval = document.getElementById('cityinput');
var btn = document.querySelector('#searchbtn');
var city = document.querySelector('#citydisplay')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humidity = document.querySelector('#humidity')
var uvIndex = document.querySelector('#UVIndex')
// third attempt example:
// http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey
btn.addEventListener('click', function () {
    var search = inputval.value;
    console.log(search);
    console.log(inputval);
    // fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&exclude={part}&appid={180208500378a70366e858082ab1a71c}')
//    fetch ( "http://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + "180208500378a70366e858082ab1a71c" )
    fetch ("https://api.openweathermap.org/data/2.5/weather?q="+search+",us&units=imperial&appid=388964fc2ffae47f3a212b1f9aac6d8b")
        .then(response => {
            console.log(response);
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


    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&exclude={part}&appid={180208500378a70366e858082ab1a71c}