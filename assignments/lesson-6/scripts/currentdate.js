//<html>
//<body>
//<p id="demo"></p>


function currentDate() {
    var d = new Date();
    var weekday = new Array(7);
    var n = weekday[d.getDay()];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    
    document.getElementById("demo").innerHTML = n;
}
//</p>
//</body>
//</html>