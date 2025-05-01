const butterflies = document.querySelectorAll('.butterfly');
const colors = ['#7fff00', '#6a5acd', '#ffa500', '#ffff00'];

let mouseX = 0;
let mouseY = 0;
let butterflyActive = localStorage.getItem('butterflyActive') === 'true'; // read from localStorage
const positions = Array.from({ length: butterflies.length }, () => ({ x: 0, y: 0 }));

let animationRunning = false;

/////////////////////////////////////////////////////////////////

document.getElementById('toggleButterflies').addEventListener('click', function() {
    butterflyActive = !butterflyActive;
    localStorage.setItem('butterflyActive', butterflyActive);

    if (butterflyActive) {
        startButterflies();
    } else {
        stopButterflies();
    }
});

/////////////////////////////////////////////////////////////////

document.addEventListener('mousemove', (event) => {
    if (butterflyActive) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
});

document.addEventListener('click', () => {
    if (butterflyActive) changeColors();
});

document.addEventListener('contextmenu', (event) => {
    if (butterflyActive) changeSizes();
});

/////////////////////////////////////////////////////////////////

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 100;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/////////////////////////////////////////////////////////////////

function animateTrail() {
    if (!butterflyActive) return; // if not active, cancel

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

function changeColors() {
    butterflies.forEach((butterfly) => {
        const randomColor = getRandomColor();
        butterfly.style.color = randomColor;
    });
}

function changeSizes() {
    butterflies.forEach((butterfly) => {
        const randomSize = Math.random() * (32 - 12) + 12;
        butterfly.style.fontSize = `${randomSize}px`;
    });
}

/////////////////////////////////////////////////////////////////

let sizeInterval = null;

function startButterflies() {
    butterflies.forEach(b => b.style.display = 'block'); // show them
    if (!animationRunning) {
        animationRunning = true;
        animateTrail();
    }
    sizeInterval = setInterval(changeSizes, 100);
}

function stopButterflies() {
    butterflies.forEach(b => b.style.display = 'none'); // hide them
    animationRunning = false;
    clearInterval(sizeInterval);
}

/////////////////////////////////////////////////////////////////

// At load, check if active
if (butterflyActive) {
    startButterflies();
} else {
    stopButterflies();
}