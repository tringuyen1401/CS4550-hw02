(function() {
  "use strict";

  function increment() {
    var header = document.getElementById('number');
    header.innerText = parseInt(header.innerText)+1;
  }

  function alert_popup() {
    var header = document.getElementById('number');
    alert(header.innerText);
  }

  function append() {
    var header = document.getElementById('number');
    var bottom = document.getElementById('bottom');
    bottom.innerText = bottom.innerText+'\n'+header.innerText;
  }

  function setup_button () {
    const inc = document.getElementById('increment');
    const alrt = document.getElementById('alrt');
    const app = document.getElementById('append');
    alrt.addEventListener('click', alert_popup, false);
    inc.addEventListener('click', increment, false);
    app.addEventListener('click', append, false);
  }

  // Delay the setup code until page is fully loaded.
  window.addEventListener('load', setup_button, false);

  // Immediately call function.
})();

