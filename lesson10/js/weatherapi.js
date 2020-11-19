const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5a8b6d64355815c5601d192328cda6b0';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let valNum = jsObject.main.temp;
        document.getElementById('current-temp').textContent = (((valNum - 273.15) * 1.8) + 32).toFixed(2);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });