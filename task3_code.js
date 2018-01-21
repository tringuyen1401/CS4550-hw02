(function() {
  "use strict";

  function lorem(e) {
    var content = document.getElementById('content');
    content.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod neque at ex ultricies, in blandit elit bibendum. Nullam ut iaculis arcu, molestie commodo ligula. Morbi sit amet varius sapien. Proin molestie nunc sollicitudin leo lacinia sodales id vel enim. Maecenas id facilisis enim, sed rhoncus urna. Aliquam id mi id ligula sagittis ultrices at eget ligula. Proin auctor arcu diam, a malesuada massa aliquam non. Ut sodales justo eget ante euismod finibus. Aliquam euismod justo nec tincidunt aliquet. Nam dictum in massa at lacinia.\n\nNam malesuada iaculis risus ac facilisis. Curabitur vel magna pellentesque, egestas ipsum a, pharetra dui. Duis dapibus augue vel facilisis scelerisque. Proin iaculis, urna vitae dapibus feugiat, arcu turpis vestibulum diam, vitae maximus nunc ex sed elit. Mauris vitae libero sed risus dignissim lacinia in feugiat lacus. Curabitur id risus risus. Ut mattis tempus purus. Sed at libero neque. In porttitor, ipsum vitae vestibulum laoreet, ligula felis vulputate risus, sed aliquet velit mauris a nibh. Morbi ut iaculis libero.\n\nPraesent bibendum ultricies velit in hendrerit. Suspendisse feugiat iaculis velit, vitae elementum nisi rhoncus sit amet. Proin fringilla pharetra eros. Nullam pulvinar est massa, ac volutpat metus convallis sit amet. Mauris dapibus dignissim eros eu consequat. Donec euismod elit diam, sit amet dignissim leo consectetur lacinia. Vestibulum ut velit at ligula scelerisque rutrum.\n\nInteger at diam magna. Nunc ornare ac lorem non eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce rhoncus aliquam nibh at bibendum. Vivamus vitae tellus libero. Cras rhoncus quam quis fermentum tincidunt. Etiam sed pulvinar erat. Duis consectetur purus felis, quis placerat lorem ornare molestie. Phasellus vel quam dictum, scelerisque tellus sit amet, scelerisque velit. Donec non purus finibus, facilisis lorem vitae, auctor erat. Integer vitae massa ut elit lobortis vehicula nec ut felis. Etiam rutrum lacus blandit ullamcorper ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
    e.preventDefault();
  }

  function bottle(e) {
    var content = document.getElementById('content');
    content.innerText = "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n";
    e.preventDefault();
  }

  function third(e) {
    var content = document.getElementById('content');
    content.innerText = "this is the third thing";
    e.preventDefault();
  }

  function setup_button () {
    const lr = document.getElementById('lorem');
    const bot = document.getElementById('bottle');
    const th = document.getElementById('third');
    lr.addEventListener('click', lorem, false);
    bot.addEventListener('click', bottle, false);
    th.addEventListener('click', third, false);
  }

  // Delay the setup code until page is fully loaded.
  window.addEventListener('load', setup_button, false);

  // Immediately call function.
})();
