var button_login = document.querySelector('.button-login');
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

// This is the important part!
function mediaDesktop(x) {
  if (x.matches) { // If media query matches
    document.querySelector('.bg-login-desktop').style.display = 'none';
  } else {
    document.querySelector('.bg-login-desktop').style.display = 'initial';    
  }
}

var x = window.matchMedia("(max-width: 469px)")
mediaDesktop(x) // Call listener function at run time
x.addListener(mediaDesktop)

function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    
    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';
    
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;
      
      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        element.style.height = 0 + 'px';
      });
    });
    
    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }
  
  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    
    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';
  
    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function(e) {
      // remove this event listener so it only gets triggered once
      element.removeEventListener('transitionend', arguments.callee);
      
      // remove "height" from the element's inline styles, so it can return to its initial value
      element.style.height = null;
    });
    
    // mark the section as "currently not collapsed"
    element.setAttribute('data-collapsed', 'false');
  }

  button_login.addEventListener('click', function(e) {
    var section = document.querySelector('.part.collapsible');
    var isCollapsed = section.getAttribute('data-collapsed') === 'true';
    var email = document.querySelector('input[text]').value;
    var id = document.querySelector('input[number]').value;
      
    if(isCollapsed) {
      expandSection(section)
      section.setAttribute('data-collapsed', 'false')
    } else {
      collapseSection(section)
    }

    for(var i=0;i<data.length;i++){
      if(emailRegex.test(email.value)){
        if(data[i].email.value==email.value && data[i].id.value==id.value){
          location.replace('http://127.0.0.1:5500/admin.html');
          document.querySelector('.admin-header h4').value = data[i].name;
        }
      }
    }
  });
