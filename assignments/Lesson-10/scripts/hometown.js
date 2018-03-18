//javaScript document town information
var output = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var jsondata = request.response;
	var cities = jsondata['towns'];
	for (var i = 0; i < cities.length; i++) {
		var city = document.createElement('h3');
		 city.textContent = cities[i].name + ' City';
    var motto = document.createElement('p');
     motto.textContent = '"' + cities[i].motto + '"';

		output.appendChild(name);
		output.appendChild(motto);
        output.appendChild(yearFounded);
        output.appendChild(currentPopulation);
        output.appendChild(averageRainfall);
        output.appendChild(events);
    }
};