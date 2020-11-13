//* Find elements with class selector preson, soda, and fish

var preston = document.querySelector('.preston');
var sodasprings = document.querySelector('.soda');
var fishhaven = document.querySelector('.fish');

//* Get JSON data from BYU-I and create functions to display on page

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    townPreston(townData);
    townFishHaven(townData);
    townSodaSprings(townData);
}

//* Function for Preston; loop through JSON data to find town "name" object, 
//* if Preston then create elements for displaying data and append to item2 (in variable "preston")

function townPreston(jsonObj) {
    var towns = jsonObj['towns']
    var i = 0;
    var name = towns[i].name;

    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Preston") {
            var townName = document.createElement('h2');
            townName.textContent = towns[i].name;
            preston.appendChild(townName);

            var townMotto = document.createElement('h3');
            townMotto.textContent = '"' + towns[i].motto + '"';
            preston.appendChild(townMotto);

            var townFound = document.createElement('p');
            townFound.textContent = 'Founded: ' + towns[i].yearFounded;
            preston.appendChild(townFound);

            var townPop = document.createElement('p');
            townPop.textContent = 'Population: ' + towns[i].currentPopulation;
            preston.appendChild(townPop);

            var townRain = document.createElement('p');
            townRain.textContent = 'Average Precipitation: ' + towns[i].averageRainfall + '"';
            preston.appendChild(townRain);
        }
    }
}

//* Function for Soda Springs; loop through JSON data to find town "name" object, 
//* if Soda Springs then create elements for displaying data and append to item3 (in variable "sodasprings")

function townSodaSprings(jsonObj) {
    var towns = jsonObj['towns']
    var i = 0;
    var name = towns[i].name;

    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Soda Springs") {
            var townName = document.createElement('h2');
            townName.textContent = towns[i].name;
            sodasprings.appendChild(townName);

            var townMotto = document.createElement('h3');
            townMotto.textContent = '"' + towns[i].motto + '"';
            sodasprings.appendChild(townMotto);

            var townFound = document.createElement('p');
            townFound.textContent = 'Founded: ' + towns[i].yearFounded;
            sodasprings.appendChild(townFound);

            var townPop = document.createElement('p');
            townPop.textContent = 'Population: ' + towns[i].currentPopulation;
            sodasprings.appendChild(townPop);

            var townRain = document.createElement('p');
            townRain.textContent = 'Average Precipitation: ' + towns[i].averageRainfall + '"';
            sodasprings.appendChild(townRain);
        }
    }
}

//* Function for Fish Haven; loop through JSON data to find town "name" object, 
//* if Fish Haven then create elements for displaying data and append to item4 (in variable "fishhaven")

function townFishHaven(jsonObj) {
    var towns = jsonObj['towns']
    var i = 0;
    var name = towns[i].name;

    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Fish Haven") {
            var townName = document.createElement('h2');
            townName.textContent = towns[i].name;
            fishhaven.appendChild(townName);

            var townMotto = document.createElement('h3');
            townMotto.textContent = '"' + towns[i].motto + '"';
            fishhaven.appendChild(townMotto);

            var townFound = document.createElement('p');
            townFound.textContent = 'Founded: ' + towns[i].yearFounded;
            fishhaven.appendChild(townFound);

            var townPop = document.createElement('p');
            townPop.textContent = 'Population: ' + towns[i].currentPopulation;
            fishhaven.appendChild(townPop);

            var townRain = document.createElement('p');
            townRain.textContent = 'Average Precipitation: ' + towns[i].averageRainfall + '"';
            fishhaven.appendChild(townRain);
        }
    }
}