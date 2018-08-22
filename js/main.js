var button_login;
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var data;

window.onload = function(){
  loadData('https://jsonplaceholder.typicode.com/users');
}

function loadData(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          data = JSON.parse(this.responseText);
     }
    
  };
  xhttp.open("GET", url, true);
  xhttp.send(); 

}

function mediaDesktop(x) {
  if (x.matches) {
    document.querySelector('.bg-login-desktop').style.display = 'none';
    document.querySelector('.button-login-desktop').style.display = 'none';
    document.querySelector('.form-logo-desktop').style.display = 'none';
    document.getElementById('logo').src = 'img/logo-contrast.png';
    button_login = document.querySelector('.button-login-mobile');

  } else {
    document.getElementById('logo').src = 'img/logo.png';
    document.querySelector('.button-login-desktop').style.display = 'initial';
    document.querySelector('.form-logo-desktop').style.display = 'initial';
    document.querySelector('.bg-login-desktop').style.display = 'initial';
    button_login = document.querySelector('.button-login-desktop');

  }
}

var x = window.matchMedia("(max-width: 469px)");
mediaDesktop(x);
x.addListener(mediaDesktop);

button_login.addEventListener('click', function(e) {
  console.log("hoallallala");
  
    if(window.matchMedia("(min-width: 469px)").matches){
      var email = document.getElementsByTagName('input')[2].value;
      var id = document.getElementsByTagName('input')[3].value;
      var input_email = document.getElementById('input-desktop');  

      if(emailRegex.test(email)){
        data.forEach(function(user) {
          if(user.email == email && user.id == id){
            location.replace('http://127.0.0.1:5500/admin.html');             
          }  
        });
      }
      else{
        input_email.classList.add('invalid');
      }
    }
    else{
      var email = document.getElementsByTagName('input')[0].value;
      var input_email = document.getElementById('input-mobile');  
      var id = document.getElementsByTagName('input')[1].value;

      if(emailRegex.test(email)){
        data.forEach(function(user) {
          if(user.email == email && user.id == id){
            location.replace('http://127.0.0.1:5500/admin.html'); 
          }  
        });
      }
      else{
        input_email.classList.add('invalid');
      }
    }
  
});
