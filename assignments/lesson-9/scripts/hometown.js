//javaScript document

var xhr = new XMLHttpRequest ();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function () {
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
        
        for (i = 0; i < myStuff.filler.length; i++) {
            console.log(myStuff.filler[i].first);
        } //end loop
        
        var mySring= "";
        for (i = 0; i < myStuff.filler.length; i++) {
            var x = i + 1;
        }// end loop
        document.getElementById('message').innerHTML = mySring;
    }//end if
}//end function