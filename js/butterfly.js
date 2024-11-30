const butterflies = document.querySelectorAll('.butterfly');
const colors = ['#7fff00', '#6a5acd', '#ffa500', '#ffff00'];

let mouseX = 0;
let mouseY = 0;

const positions = Array.from({ length: butterflies.length }, () => ({ x: 0, y: 0 }));

/////////////////////////////////////////////////////////////////

// track mouse event listener
document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// change colors via left-click
document.addEventListener('click', () => {
      changeColors();
});

// change sizes via right-click
document.addEventListener('contextmenu', (event) => {
    //event.preventDefault(); // prevent right-click menu
    changeSizes();
});
/////////////////////////////////////////////////////////////////

// random color function, returns highly saturated color
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 100;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/////////////////////////////////////////////////////////////////

// animate trail function
function animateTrail() {
  // update positions
  positions.forEach((pos, index) => {
    var num = (Math.random() * (0.1 - 0.01) + 0.01).toFixed(2);
    if (index === 0) {
      pos.x += (mouseX - pos.x) * num;
      pos.y += (mouseY - pos.y) * num;
    } else {
      pos.x += (positions[index - 1].x - pos.x) * num;
      pos.y += (positions[index - 1].y - pos.y) * num;
    }

    butterflies[index].style.transform = `translate(${pos.x}px, ${pos.y}px)`;
  });

  requestAnimationFrame(animateTrail);
}

/////////////////////////////////////////////////////////////////

// change colors function
function changeColors() {
  butterflies.forEach((butterfly) => {
    //const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomColor = getRandomColor();
    butterfly.style.color = randomColor;
  });
}

// change sizes function
function changeSizes() {
    butterflies.forEach((butterfly) => {
      const randomSize = Math.random() * (32 - 12) + 12; // 12px - 32px
      butterfly.style.fontSize = `${randomSize}px`;
    });
}

/////////////////////////////////////////////////////////////////

// animation start
animateTrail();
setInterval(changeSizes, 100)
//setInterval(changeColors, 500); // change colors every 500ms