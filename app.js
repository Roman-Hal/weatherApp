window.addEventListener("load", ()=> {
    
    let lon;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let iconPlace = document.querySelector('.icon');
    let degreeSection = document.querySelector('.degree-section');
    const degreeSpan = document.querySelector('.degree-section span');
    let wrong = document.querySelector('.wrong');
    let timeActual = document.querySelector('.time');

    

    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        wrong.textContent = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            var myVar = setInterval(myTimer, 1000);

                function myTimer() {
                var date = new Date();
                var time = date.toLocaleTimeString();
                timeActual.innerHTML = time;
                }

            //const proxy = "https://cors-anywhere.herokuapp.com/";

            //const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&units=imperial&appid=b6cfa4030fe8998f2e47685f8d3e4cf4`
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b6cfa4030fe8998f2e47685f8d3e4cf4`
            //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&units=imperial&appid=b6cfa4030fe8998f2e47685f8d3e4cf4`
            //http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temp} = data.main;
                //const {temp} = data.current;
                const {description, icon} = data.weather[0];
                //const {description, icon} = data.current.weather[0];
                const {name} = data;
                //const {timezone} = data;
                //const tZone = data.timezone;
                
                let celsius = Math.round(temp * 10) /10
                //set DOM Elements from the API
                //console.log(data.current.weather[0].description);
                temperatureDegree.textContent = celsius;
                //temperatureDegree.textContent = temp;
                temperatureDescription.textContent = description;
                locationTimezone.textContent = name;
                //locationTimezone.textContent = timezone;
                degreeSpan.textContent = '°C';
                //degreeSpan.textContent = '°F';

                

                //Formula for celsius
                
                //let celsius = (temp - 32) * (5 / 9);
                let fahrenheit = (temp * (9/5)) + 32;

                //set icon
                //iconPlace.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                iconPlace.src = `openweathermap/${icon}.svg`;

                //Change temperature to Celsius/Farenheit
                degreeSection.addEventListener('click', () => {
                   /* if(degreeSpan.textContent === "°F") {
                        degreeSpan.textContent = "°C";
                        temperatureDegree.textContent = Math.round(celsius * 10) /10;
                    }else {
                        degreeSpan.textContent = "°F";
                        temperatureDegree.textContent = temp;
                    }*/
                    if(degreeSpan.textContent === "°C") {
                        degreeSpan.textContent = "°F";
                        temperatureDegree.textContent = Math.round(fahrenheit * 100) /100;
                    }else {
                        degreeSpan.textContent = "°C";
                        temperatureDegree.textContent = celsius;
                        //temperatureDegree.textContent = temp;
                    }
                })
            });
    }
    /*else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }

    function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
            var content = 'Error: The Geolocation service failed.';
        } else {
            var content = 'Error: Your browser doesn\'t support geolocation.';
        }
    }*/
    function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            wrong.textContent = "User denied the request for Geolocation. Application need location to run."
            break;
          case error.POSITION_UNAVAILABLE:
            wrong.innerHTML = "Location information is unavailable."
            break;
          case error.TIMEOUT:
            wrong.innerHTML = "The request to get user location timed out."
            break;
          case error.UNKNOWN_ERROR:
            wrong.innerHTML = "An unknown error occurred."
            break;
        }
    }
})
