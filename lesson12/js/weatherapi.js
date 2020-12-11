const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&appid=5a8b6d64355815c5601d192328cda6b0&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);
        let t = parseFloat(jsObject.main.temp);

        document.getElementById('temp').innerHTML = jsObject.weather[0].description;
        document.getElementById('feels').innerHTML = Math.round(t) + "&#8457;";
        document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
        document.getElementById(`icon$`).setAttribute('src', imgSrc);
        document.getElementById(`icon$`).setAttribute('alt', desc);

    });
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&appid=5a8b6d64355815c5601d192328cda6b0&units=imperial';
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {

        console.table(forecastObject);
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast.length; day++) {

            const d = new Date(forecast[day].dt_txt);
            const imgSrc = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
            const desc = forecast[day].weather[0].description;


            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
            document.getElementById(`icon${day+1}`).setAttribute('src', imgSrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);

        }

    });