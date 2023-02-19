// Valid API Key for relevant URL
// let APIKEY = "d23c1342fed6bb5821f38a930fb0894b";
let APIKEY = "06191c32d8ecb0ee651d31bd50188fd1";

// Database addresss to retrieve data from includes URL address, search criteria & API Key
let queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "city" + APIKEY;

// Run the AJAX call to the OpenWeatherMap API
$.ajax({
    url:queryURL,
    method: "GET"
})

// Store retrieved data inside of ab object called response
.then(function(response) {

// Log the queryURL 
console.log(queryURL);

//The associated Object
console.log(response);

//convert to celcius
let tempC = (response.main.temp);

// Show results on webpage HTML
$("city").html("<h1>" + response.name + "Weather Details</h1>");
$("date").html("<h1>" + response.date + "Date</h1>");
$("icon").img(+ response.icon + "Icon");
$("temp").text("Temperature (K)" + response.main.temp);
$("temp").text("Temperature (C)" + response.toFixed(2));
$("wind").text("Wind Speed: " + response.wind.speed);
$("humidity").text("Humidity: " + response.main.humidity);

// Log data in console 
console.log("Date: " + response.date);
console.log("Icon  " + response.icon);
console.log("Temperature (C): " tempC);
console.log("Wind Speed: " + response.wind.speed);
console.log("Humidity: " + response.main.humidity);

});

