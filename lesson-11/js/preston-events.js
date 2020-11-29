const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function events(city) {

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        }).then(function (jsonObject) {
            const town = jsonObject['towns'];
            const filtered = town.filter(town => (town.name == city));
            let paragraph = document.createElement('div');

            for (let i = 0; i < filtered[0].events.length; i++) {
                let eventCity = document.getElementsByClassName("city");
                let eventItem = document.createElement('p');
                let city = filtered[0].name.includes(eventCity);
                eventItem.textContent = filtered[0].events[i];
                paragraph.appendChild(eventItem);
            }
            document.querySelector('div.events').appendChild(paragraph);
        });
}

events('Preston');