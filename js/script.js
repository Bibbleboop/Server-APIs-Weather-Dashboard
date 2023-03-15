// l searchinput = document.querySelector("#form-heading")
let searchform = document.querySelector("#search-form")
let searchanswer = document.querySelector(".form-input")
// let searchanswer = document.querySelector("search-input")
let searchbtn = document.querySelector("search-button")
// l yourselection = document.querySelector("#history")
// l filmdata = document.querySelector("#today")
let tommorow=  document.querySelector("#forecast") 
let citydata = document.querySelector("#cityweather") 
// v year = document.querySelector('#citydata')
let citytemp  = document.querySelector("#MainTemp")
let citywind = document.querySelector("#MainWind")
let cityhumidity = document.querySelector("#MainHumidity")
let container = document.querySelector(".parentContainer")
// let.querySelector(".listgroup")

// Valid API Key for relevant URL // let APIKEY = "d23c1342fed6bb5821f38a930fb0894b";
let APIkey = "d23c1342fed6bb5821f38a930fb0894b";

let today = moment();
$("check").text(today.format("D MMM YYYY"));

// let queryURL = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={APIkey}";
// let queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}"
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" & "city name" & "d23c1342fed6bb5821f38a930fb0894b";
let url = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name"
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

let cities = []
//store data for cities searched 
let loadcities = function() {
    let citiesRetrieved = localStorage.getItem("cities")
    if(!citiesRetrieved) {
        return false;
    }
    citiesRetrieved =JSON.parse(citiesRetrieved);
    for (let i=0; i <citiesRetrieved.length; i++) {
        createButton(citiesRetrieved[i])
        cities.push(citiesRetrieved[i])
    }
}
// save cities in local storage json stringify
let savecities = function () {
    localStorage.setItem("cities", JSON.stringify(cities));

    event.preventDefault = function(event) {}
}

let searchfunction = function(event) {
event.preventDefault();
let city = searchanswer.value.trim();

}
// Fetch with url data
fetch(queryURL)
    // Store retrieved data inside of ab object called response
.then(function(response) {
//if response is ok
if (response.ok) {
    response.json().then(function(data) {
        dashboard(data, city); 
    }
    )}
});

    //Create new button for city 
// let priorSearch = cities.includes(city)
//     if (!priorSearch) {
//         cities.push(city)
//         savecities()
//         createButton(city);
       
// }
// } else {
//     // alert("not valid: " + response.statusText);
// }
// })
    


// Log the queryURL 
// console.log(queryURL);

//The Resulting Object
// console.log(response);



// Show results on webpage HTML
// $("#city").text("<h1>" + response.name + "Weather Details</h1>");
// $("#date").html("<h1>" + response.date + "Date</h1>");
// $("#icon").text(+ response.icon + "Icon");
// $("#temp").text("Temperature (K)" + response.main.temp);
// $("#temp").text("Temperature (C)" + response.toFixed(2));

//convert to celcius
// let tempC = (response.main.temp);

// $("#wind").text("Wind Speed: " + response.wind.speed +  mph);
// $("#humidity").text("Humidity: " + response.main.humidity );
""
// Log data in console 
// console.log("Date: " + response.date);
// console.log("Icon  " + response.icon);
// console.log("Temperature (C): " "tempC");
// console.log("Wind Speed: " + response.wind.speed);
// console.log("Humidity: " + response.main.humidity);

// console.log(response.main.temp - 272);



// let Icon = data.weather[0].icon;

//city history previously searched
// loadCities()

searchbtn.addEventListener("click", searchfunction);

