var x = 1;
var scroll = document.getElementsByClassName('.marquee-scroll');

function move(){
  x++;
  scroll.style.backgroundPositionX = x + "px";
}

setInterval(move, 50);