function autorun() { // Main exec function
  'use strict';

  // Once my name shows up, animate the other boxes
  var name = document.getElementById('myName');
  var aboutElem = document.getElementById('about');
  var contactElem = document.getElementById('contact');
  var swappable = document.getElementById('swappable');
  var selected;

  // add event listeners for each browser type
  name.addEventListener('webkitAnimationEnd', doAnimate, false);
  name.addEventListener('msAnimationEnd', doAnimate, false);
  name.addEventListener('oAnimationEnd', doAnimate, false);
  name.addEventListener('animationend', doAnimate, false);

  // add content swap event listeners
  aboutElem.addEventListener('click', function() {
    if (selected) {
      removeClass('selected', selected);
    }
    selected = aboutElem;
    addClass('selected', aboutElem);
    swapContent(swappable, 'partial/about.html');
  }, false);

  contactElem.addEventListener('click', function() {
    if (selected) {
      removeClass('selected', selected);
    }
    selected = contactElem;
    addClass('selected', contactElem);
    swapContent(swappable, 'partial/contact.html');
  }, false);

}

function doAnimate() {
  'use strict';
  // Get all the things that should animate second
  var e = document.querySelectorAll('.navItem');
  var animName;
  var oldClasses;

  // loop through them all, get their data attr and apply that as a class
  // also make them unhidden
  for (var i = e.length - 1; i >= 0; i--) {
    animName = e[i].getAttribute('data-anim');
    removeClass('hidden', e[i]);
    oldClasses = e[i].getAttribute('class');
    e[i].setAttribute('class', oldClasses + ' ' + animName);
  }
}

function ajax (dataUrl, callback) {
  'use strict';
  var request = getHTTPObject();

  request.onreadystatechange = function() {
    if ( request.readyState === 4 && request.status === 200) {

      var res = request.responseText;

      if (typeof callback === 'function') {
        callback(res);
      }
    }
  };

  request.open("GET", dataUrl, true);
  request.send(null);
}

function removeClass (className, elem) {
  'use strict';
  var classes = elem.getAttribute('class');
  var classArr = classes.split(' ');

  classes = classArr.filter(function(e) {
    return e === className ? false : true;
  });

  elem.setAttribute('class', classes.join(' '));
}

function addClass (className, elem) {
  'use strict';
  var classes = elem.getAttribute('class');
  var classArr = classes.split(' ');
  classArr.push(className);

  elem.setAttribute('class', classArr.join(' '));
}

function getHTTPObject() {
  'use strict';
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject('Msxml2.XMLHTTP');
  }
  return xhr;
}

function swapContent(target, file) {
  'use strict';
  ajax(file, function(res) {
    target.innerHTML = res;
  });
}


// this executes the autorun function once the page is ready
if (window.addEventListener)
  window.addEventListener('load', autorun, false);
  else if (window.attachEvent)
    window.attachEvent('onload', autorun);
  else
    window.onload = autorun;