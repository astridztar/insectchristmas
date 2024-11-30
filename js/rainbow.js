// slow alarm
setInterval(rainbow, 1000);
function rainbow() {
    // i.c. random color
    var ic = document.getElementById('rainbow');
    ic.style.color = getRandomColor();
}

// random color function, returns a random hex
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}