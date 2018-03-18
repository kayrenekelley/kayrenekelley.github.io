//javaScript document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/8e9ab84b041faf49/conditions/q/CA/San_Francisco.json', true);

//weatherObject.send();

weatherObject.onreadystatechange = function() {
    console.log(weatherObject.readyState);
    console.log(weatherObject.status);
    //var weatherInfo = JSON.parse(weatherObject.responseText);
    //console.log(weatherObject.weatherInfo);
    
};
weatherObject.onload = function() {
    var myStuff = JSON.parse(weatherObject.responseText);
    console.log(myStuff);
}
//weatherObject.send(); //end of onload