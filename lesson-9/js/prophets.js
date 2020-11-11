const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let dateOfBirth = document.createElement('p');
      let placeOfBirth = document.createElement('p');
      let img = document.createElement('img');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      dateOfBirth.textContent = 'Date of Birth: ' + prophets[2].birthdate;
      placeOfBirth.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      img.setAttribute('src', prophets[i].imageurl);
      img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname +' - ' + prophets[i].order);

      card.appendChild(h2);
      card.appendChild(dateOfBirth);
      card.appendChild(placeOfBirth);
      card.appendChild(img);

      document.querySelector('div.cards').appendChild(card);
    }
  });