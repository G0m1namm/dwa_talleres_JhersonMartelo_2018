var data;
window.onload = function(){
    data= loadData("http://pokeapi.co/api/v2/pokemon/1/");
}

function loadData(url){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
       }
      
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}