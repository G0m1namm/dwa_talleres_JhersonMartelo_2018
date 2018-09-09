
var pokemon_image = [];

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

function showPokemon(data){
  var name = data.forms[0].name,
  pokeImgFront = data.sprites.front_default,
  ability = data.abilities[0].ability.name,
  lvl = data.stats[4].base_stat,
  id = "#" + data.id,
  weight =  data.weight,
  height = data.height,
  type = [];

  for (var i = 0; i < data.types.length; i++) {
      var type = data.types[i].type.name;
      $(".type").html(type);
  }
  $(".size h2").html(name);
  $(".idNum").html(id);
  $("#pokeImage").attr("src", pokeImgFront);
  $(".level").html(lvl);
  $(".ability").html(ability);
  $(".weight").html(weight);
  $(".height").html(height);

  $(".pokemon-thumb img").each(function(i){
    $(this).attr("src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png");
    $(this).attr("alt",i+1);
  });
  
  
}

function animationEvent(){
  $('header').css({"height":"50vh","-webkit-box-shadow":"inset -10px 10px 20px 0px rgba(255,255,255,0.5),2px 2px 7px 1px #06444a", "-moz-box-shadow":"inset -10px 10px 20px 0px rgba(255,255,255,0.5),2px 2px 7px 1px #06444a", "box-shadow":"inset -10px -10px 20px 0px rgba(255,255,255,0.5)"});

  $('footer').css({"height":"50vh","-webkit-box-shadow":"inset -10px 10px 20px 0px rgba(255,255,255,0.5),2px 2px 7px 1px #06444a", "-moz-box-shadow":"inset -10px 10px 20px 0px rgba(255,255,255,0.5),2px 2px 7px 1px #06444a", "box-shadow":"inset -10px -10px 20px 0px rgba(255,255,255,0.5)"});

}

function removeAnimationEvent(){
  $('header').css({"height":"125px","-webkit-box-shadow":"inset 10px 10px 25px 0px rgba(255,255,255,0.5),2px 2px 7px 1px #06444a", "-moz-box-shadow":"inset 10px 10px 25px 0px rgba(255,255,255,0.5),2px 2px 7px 1px #06444a", "box-shadow":"inset 10px 10px 25px 0px rgba(255,255,255,0.5),2px 2px 7px 1px #06444a"});

  $('footer').css({"height":"125px","-webkit-box-shadow":"inset 10px -10px 25px 0px rgba(255,255,255,0.5)", "-moz-box-shadow":"inset 10px -10px 25px 0px rgba(255,255,255,0.5)", "box-shadow":"inset 10px -10px 25px 0px rgba(255,255,255,0.5)"});

}

$(function() {
  var url = "https://pokeapi.co/api/v2/pokemon/1/";

  $.ajax({
    url: url,
    dataType: "json",
    method: "GET",
    success: function(data) {
        showPokemon(data);
    } //SUCCESS
    
  }); //AJAX

  $('.pokemon-selection').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }],
      adaptativeHeight:true
  }); // $('.slick-carousel')
  
  $('.pokemon-thumb img').on('click', function(e) {
      e.preventDefault();

      url = "https://pokeapi.co/api/v2/pokemon/"+e.target.alt+"/";
      animationEvent();

      $.ajax({
        url: url,
        dataType: "json",
        method: "GET",
        success: function(data) {

          setTimeout(showPokemon(data),2000);

        } //SUCCESS
        
      }); //AJAX

      setTimeout(removeAnimationEvent, 1500);
      return false;
  });
  
});



