var i = 0;
var txt = 'Aahil Dawoodani';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading1ID").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/*
function blinker() {
  {
    $('.blinking').fadeOut(500);
  	$('.blinking').fadeIn(500);
  }

}
setInterval(blinker, 1000);
*/
