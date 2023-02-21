// Valid API Key for relevant URL
// let APIKEY = "d23c1342fed6bb5821f38a930fb0894b";
let APIkey = "06191c32d8ecb0ee651d31bd50188fd1";

// Database addresss to retrieve data from includes URL address, search criteria & API Key
// let queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "city" + APIKEY;
// let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={APIkey}";
let today = moment();
$("check").text(today.format("D MMM YYYY"));

let queryURL = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={APIkey}";
let url = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name"

// Run the AJAX call to the OpenWeatherMap API
$.ajax({
    type: 'GET';
    url: queryURL;
    
    // Type: 'json',
    // success: function(data) {}
// //console.log(forecastjson)
// displayWeather(forecastjson);
// }, 
// error: function(error) {
//     console.log(error);

// }
// });
    // Store retrieved data inside of ab object called response
}).then(function(response) {

// Log the queryURL 
console.log(queryURL);

//The Resulting Object
console.log(response);



// Show results on webpage HTML
$("#city").text("<h1>" + response.name + "Weather Details</h1>");
$("#date").html("<h1>" + response.date + "Date</h1>");
$("#icon").text(+ response.icon + "Icon");
$("#temp").text("Temperature (K)" + response.main.temp);
$("#temp").text("Temperature (C)" + response.toFixed(2));

//convert to celcius
let tempC = (response.main.temp);

$("#wind").text("Wind Speed: " + response.wind.speed +  mph);
$("#humidity").text("Humidity: " + response.main.humidity );
""
// Log data in console 
console.log("Date: " + response.date);
console.log("Icon  " + response.icon);
// console.log("Temperature (C): " "tempC");
console.log("Wind Speed: " + response.wind.speed);
console.log("Humidity: " + response.main.humidity);

console.log(response.main.temp - 272);

});

let Icon = data.weather[0].icon;