const butterflies = document.querySelectorAll('.butterfly');
const positions = Array.from({ length: butterflies.length }, () => ({ x: 0, y: 0 }));

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let butterflyActive = localStorage.getItem('butterflyActive') === 'true';
let animationRunning = false;
let sizeInterval = null;

function animateTrail() {
    if (!animationRunning) return;

    positions.forEach((pos, index) => {
        const speed = Math.random() * (0.1 - 0.01) + 0.01;
        const target = index === 0 ? { x: mouseX, y: mouseY } : positions[index - 1];

        pos.x += (target.x - pos.x) * speed;
        pos.y += (target.y - pos.y) * speed;

        butterflies[index].style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    });

    requestAnimationFrame(animateTrail);
}

function changeColors() {
    butterflies.forEach(b => {
        const hue = Math.floor(Math.random() * 360);
        b.style.color = `hsl(${hue}, 100%, 50%)`;
    });
}

function changeSizes() {
    butterflies.forEach(b => {
        const size = Math.random() * (32 - 12) + 12;
        b.style.fontSize = `${size}px`;
    });
}

function applyButterflyVisibility() {
    butterflies.forEach(b => {
        b.style.visibility = butterflyActive ? 'visible' : 'hidden';
    });

    if (butterflyActive && !sizeInterval) {
        sizeInterval = setInterval(changeSizes, 100);
    } else if (!butterflyActive && sizeInterval) {
        clearInterval(sizeInterval);
        sizeInterval = null;
    }
}

function attachButterflyToggle() {
    const btn = document.getElementById('toggleButterflies');
    if (!btn) {
        setTimeout(attachButterflyToggle, 100);
        return;
    }

    btn.addEventListener('click', () => {
        butterflyActive = !butterflyActive;
        localStorage.setItem('butterflyActive', butterflyActive);
        applyButterflyVisibility();
    });
}

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.addEventListener('click', () => {
    if (butterflyActive) changeColors();
});

document.addEventListener('contextmenu', e => {
    if (butterflyActive) changeSizes();
});

applyButterflyVisibility();
attachButterflyToggle();

if (!animationRunning) {
    animationRunning = true;
    animateTrail();
}