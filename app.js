//require('dotenv').config();
//import 'dotenv/config';
//import {NODE_ENV_API_KEY} from '../.env';
window.addEventListener("load", ()=> {
    //import 'dotenv/config';
    //require('dotenv').config();
    //require("dotenv").config({ path: `../.env.${process.env.NODE_ENV_API_KEY}` });

    /*exports.handler = async function (event, context) {
        const secKey = process.env.MY_API_KEY;
        return {
          statusCode: 200,
          body: JSON.stringify(secKey),
        };
      };*/

      /*default async (request, context) => {
        const secKey = Netlify.env.get("MY_API_KEY");
      
        return new Response(secKey, {
          headers: { "content-type": "text/html" },
        });
      };*/
      
      


      //const secKey = process.env.MY_API_KEY
      
    /*const secKey = NODE_ENV_API_KEY;
    console.log(secKey);*/
    
    getLocation();
    

    let lon;
    let lat;
    let appDescription = document.querySelector('.app-name');
    let temperatureHead = document.querySelector('.temp-description-head');
    let temperatureText = document.querySelector('.temperature-degree-text');
    let feelsDesc = document.querySelector('.feels-description');
    let feelsTemperature = document.querySelector('.feels-temp');
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let iconPlace = document.querySelector('.icon');
    let degreeSection = document.querySelector('.degree-section');
    //const degreeSpan = document.querySelectorAll(".degree-section span, .feels-like-temperature span");
    const degreeSpan = document.querySelector('.temperature span');
    const feelsSpan = document.querySelector('.feels-like-temperature span');
    let wrong = document.querySelector('.wrong');
    let timeActual = document.querySelector('.time');
    let dateActual = document.querySelector('.actualDate');
    /*dotenv.config();*/
    /*const apiKey = process.env.REACT_APP_API_KEY;
    console.log(apiKey);*/
    /*let dateActual = document.querySelector('.date');*/

    

    
    

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
            //line bellow keep returning the position of the device like gps
            /*navigator.geolocation.watchPosition(showPosition, showError);*/
        } else {
            wrong.textContent = "Geolocation is not supported by this browser.";
        }
    };

        var myVar = setInterval(myTimer, 1000);
            function myTimer() {
                var date = new Date();
                const options = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  };
                var time = date.toLocaleTimeString();
                var actualDate = date.toLocaleDateString("default", options);
                timeActual.innerHTML = time;
                dateActual.innerHTML = actualDate;
                /*dateActual.innerHTML = date.toDateString("cs-CZ", options);*/
            };


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // test using interval
    //myInterval = setInterval(fetch, 2000);
    //var myInterval = setInterval(showPosition, 2000);
    /*let seconds = 0;
        const intervalId = setInterval(() => {
        seconds++;
        console.log("Seconds elapsed: ", seconds);
    }, 1000); // Interval set to 1 second*/

    //Reload for location and the rest of the code

        //var myLoc = setInterval(getLocation, 5000);
    //var myInterval = setInterval(() => showPosition, 2000);
    //setInterval(() => navigator.geolocation.getCurrentPosition(showPosition, showError), 2000);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    
    function showPosition(position) {

        

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //Official google code for cloud translation

     // Imports the Google Cloud client library
    //const {Translate} = require('@google-cloud/translate').v2;

    // Creates a client
    //const translate = new Translate();

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    //const text = 'The text to translate, e.g. Hello, world!';
    //const target = 'The target language, e.g. ru';

    //async function translateText() {
    // Translates the text into the target language. "text" can be a string for
    // translating a single piece of text, or an array of strings for translating
    // multiple texts.
    /*let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log('Translations:');
    translations.forEach((translation, i) => {
        console.log(`${text[i]} => (${target}) ${translation}`);
    });
    }

    translateText();*/
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


            const crd = position.coords;
            let lon = crd.longitude;
            let lat = crd.latitude;
            //local language return
            const lang = navigator.language || navigator.userLanguage;
            const currentLangCodeShort = lang.split('-')[0];
            /*console.log(lang);
            console.log(currentLangCodeShort);*/

            //translation of page to the default language

            function setCookie(key, value, expiry) {
                var expires = new Date();
                expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
                document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
              }

              function googleTranslateElementInit() {
                setCookie('googtrans', `/en/${currentLangCodeShort}`,1);
                new google.translate.TranslateElement({
                   pageLanguage: 'en'
                }, 'google_translate_element');
            }

            googleTranslateElementInit();

            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //Page translation another way
            /*let google_translate_element = currentLangCodeShort;

            function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en'}, google_translate_element);
            }*/
            /*function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    includedLanguages: 'fr,en'
                }, 'hiddenGoogleTranslate')};*/

                //googleTranslateElementInit();

            //!!!!!!!!!!!!!!!!!!!!!!
            //test code for coordinates

            /*console.log(`lon: ${crd.latitude}`);
            console.log(`lan: ${crd.longitude}`);*/
           /* let lon = position.coords.longitude;
            let lat = position.coords.latitude;*/

            //const proxy = "https://cors-anywhere.herokuapp.com/";
            

            //const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&units=imperial&appid=b6cfa4030fe8998f2e47685f8d3e4cf4`
            //const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b6cfa4030fe8998f2e47685f8d3e4cf4`;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=${lang}&appid=b6cfa4030fe8998f2e47685f8d3e4cf4`;
            //const api = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=%REACT_APP_API_KEY%';
            //const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=${lang}&appid=${secKey}`;
            //const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=${lang}&appid=${import.meta.env.REACT_APP_API_KEY}`;
            //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&units=imperial&appid=b6cfa4030fe8998f2e47685f8d3e4cf4`
            //http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temp} = data.main;
                //const {temp} = data.current;
                const {feels_like} = data.main;
                const {description, icon} = data.weather[0];
                //const {description, icon} = data.current.weather[0];
                const {name} = data;
                //const {timezone} = data;
                //const tZone = data.timezone;
                
                celsius = val => Math.round(val * 10) /10;

                //set DOM Elements from the API
                appDescription.textContent = 'Weather App';
                //temperature description part
                temperatureHead.textContent = 'TEMPERATURE';
                temperatureText.textContent = 'now:';
                //feels like temperature values
                feelsDesc.textContent = 'feels:';
                /*feelsTemperature.textContent = feelsCelsius;*/
                feelsTemperature.textContent = celsius(feels_like);
                //console.log(data.current.weather[0].description);
                temperatureDegree.textContent = celsius(temp);
                //temperatureDegree.textContent = temp;
                temperatureDescription.textContent = description;
                locationTimezone.textContent = name;
                //locationTimezone.textContent = timezone;
                degreeSpan.textContent = '°C';
                feelsSpan.textContent = degreeSpan.textContent;
                //degreeSpan.textContent = '°F';

                

                //Formula for celsius and fahrenheit
                
                //let celsius = (temp - 32) * (5 / 9);
                fahrenheit = val => (val * (9/5)) + 32;

                //set icon
                //iconPlace.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                iconPlace.src = `openweathermap/${icon}.svg`;
                //Change pressed temperature button
                degreeSection.addEventListener('mousedown', () => {
                    degreeSection.style.backgroundColor = "lightgrey";
                    degreeSection.style.boxShadow = "1px 1px 4px 4px";
                });
                degreeSection.addEventListener('mouseup', () => {
                    degreeSection.style.backgroundColor = "transparent";
                    degreeSection.style.boxShadow = "0px 0px 2px 2px grey";
                });
                //Change temperature to Celsius/Farenheit
                degreeSection.addEventListener('click', () => {
                    if(degreeSpan.textContent === "°C") {
                        degreeSpan.textContent = "°F";
                        feelsSpan.textContent = degreeSpan.textContent;
                        temperatureDegree.textContent = Math.round(fahrenheit(temp) * 100) /100;
                        feelsTemperature.textContent = Math.round(fahrenheit(feels_like) *100) /100;
                    }else {
                        degreeSpan.textContent = "°C";
                        feelsSpan.textContent = degreeSpan.textContent;
                        temperatureDegree.textContent = celsius(temp);
                        feelsTemperature.textContent = celsius(feels_like);
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
