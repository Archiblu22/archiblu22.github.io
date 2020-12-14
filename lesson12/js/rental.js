$.getJSON('data.json', function(data) {
    function showData(jsonObj) {
        var data = jsonObj['serviceRentals'];
    
        for (var i = 0; i < data.length; i++) {
            var myRentals = document.createElement('rentals');
            var myType = document.createElement('type');
            var myPersons = document.createElement('persons');
            var myReservationhalf = document.createElement('reservationhalf');
            var myReservationfull = document.createElement('reservationfull');
            var myWalkinhalf = document.createElement('walkinhalf');
            var myWalkinfull = document.createElement('walkinfull');
    
            myPersons.textContent = data[i].name;
            myReservationhalf.textContent = data[i].type;
            myReservationfull.textContent = data[i].type;
            myWalkinhalf.textContent = data[i].type;
            myWalkinfull.textContent = data[i].type;
    
            var rental = data[i].items;
            for (var j = 0; j < rental.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = rental[j];
                myList.appendChild(listItem);
            }
    
            myType.appendChild(myPersons);
            myType.appendChild(myReservationhalf);
            myType.appendChild(myReservationfull);
            myType.appendChild(myWalkinhalf);
            myType.appendChild(myWalkinfull);
    
            myRentals.appendChild(myType);
            aside.appendChild(myRentals);
        }
    }});