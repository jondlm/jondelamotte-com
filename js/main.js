function autorun() { // Main exec function
  // Strict mode, yes please!
  'use strict';

  // #Analytics
  mixpanel.track('Visited landing page');

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

    // #Analytics
    mixpanel.track('Visited about page');

    if (selected) {
      removeClass('selected', selected);
    }
    selected = aboutElem;
    addClass('selected', aboutElem);
    swapContent(swappable, 'partial/about.html');
  }, false);

  contactElem.addEventListener('click', function() {

    // #Analytics
    mixpanel.track('Visited contact page');
    
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
  var e = document.querySelectorAll('.loadHide');
  var animName;
  var oldClasses;

  // Add music boxes
  addMusicBox();

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

function addMusicBox() {
  'use strict';

  var parent = document.getElementById('music');

  ajax('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jondlm&api_key=8a1f0fc68c0f252d3d0fa202020d5f76&format=json',
    function(d){
      var tracks = JSON.parse(d).recenttracks.track;

      // only grab the top recent tracks
      for (var i = 0; i < tracks.length ; i++) {
        var newBox;

        if (tracks[i]['@attr'] && tracks[i]['@attr'].nowplaying === "true"){
          newBox  = '<div class="musicBox">';
          newBox += '<img class="albumArt" src="'+ tracks[i].image[1]['#text'] +'" alt="">';
          newBox += '<span class="t">Track: </span><span>'+ tracks[i].name +'</span><br>';
          newBox += '<span class="t">Artist: </span><span>'+ tracks[i].artist['#text'] +'</span><br>';
          newBox += '<img src="img/listening.gif" alt="" />';
          newBox += '<span class="t"> Now listening!</span>';
          newBox += '</div>';
        } else {
          newBox  = '<div class="musicBox">';
          newBox += '<img class="albumArt" src="'+ tracks[i].image[1]['#text'] +'" alt="">';
          newBox += '<span class="t">Track: </span><span>'+ tracks[i].name +'</span><br>';
          newBox += '<span class="t">Artist: </span><span>'+ tracks[i].artist['#text'] +'</span><br>';
          newBox += '<span class="t">Listened: </span><span>'+ moment.utc(tracks[i].date['#text'], 'DD MMM YYYY, hh:mm').local().fromNow() +'</span><br>';
          newBox += '</div>';
        }

        parent.innerHTML += newBox;
      };
    }
  );
}


// this executes the autorun function once the page is ready
if (window.addEventListener)
  window.addEventListener('load', autorun, false);
  else if (window.attachEvent)
    window.attachEvent('onload', autorun);
  else
    window.onload = autorun;