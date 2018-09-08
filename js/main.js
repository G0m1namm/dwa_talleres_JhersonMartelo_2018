function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
}

function getTitle(text) {
    return text.match("<title>(.*)?</title>")[1];
}

function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var url =
      "http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html";
    var xhr = createCORSRequest("GET", url);
    if (!xhr) {
      alert("CORS not supported");
      return;
    }
    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      var title = getTitle(text);
      alert("Response from CORS request to " + url + ": " + title);
    };
    xhr.onerror = function() {
      alert("Woops, there was an error making the request.");
    };
    xhr.send();
}

var url = "https://pokeapi.co/api/v2/pokemon/1";
    console.log(url);
$.ajax({
    url: url,
    dataType: "json",
    method: "GET",
    success: function(data) {
        var name = data.forms[0].name,
        pokeImgFront = data.sprites.front_default,
        ability = data.abilities[0].ability.name,
        lvl = data.stats[4].base_stat,
        id = "#" + data.id,
        weight =  data.weight,
        height = data.height,
        types = [];
        for (var i = 0; i < data.types.length; i++) {
            var type = data.types[i].type.name;
            $(".type").html(type + " ");
            types.push(type);
        }
        console.log(types);

        $(".size h2").html(name);
        $(".idNum").html(id);
        $("#pokeImage").attr("src", pokeImgFront);
        // $(".pokemon-type").addClass("type"+types[0]);
        $(".level").html(lvl);
        $(".ability").html(ability);
        $(".weight").html(weight);
        $(".height").html(height);
    } 
    
});