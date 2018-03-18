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




//javaScript document

//var xhr = new XMLHttpRequest();
//xhr.open('GET', "https://byui-cit230.github.io/weather/data/towndata.json", true);
//xhr.responseType = 'text';
//xhr.send();


//xhr.onload = function() {
    //if (xhr.status === 200) {
       //var towndata = request.response;
        
        //var towns = towndata['towns'];
        
        //for (var i = 0; i < towns.length; i++) {
           //var townname =    ;
        //} //end loop
        
        //var mySring= "";
        //for (i = 0; i < myStuff.filler.length; i++) {
            //var x = i + 1;
        //} // end loop
        //document.getElementById('message').innerHTML = mySring;
   // } //end if
//} //end function

