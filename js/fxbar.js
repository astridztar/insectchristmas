///////////////////////////
// rain toggle with localStorage
let raindropActive = localStorage.getItem('raindropActive') === 'true'; // retrieve state
let raindropInterval = null;
let rainAudio = new Audio('https://insect.christmas/sfx/rain.mp3');
rainAudio.loop = true;
rainAudio.volume = 0.5;

function createraindrop() {
    const raindrop = document.createElement('div');
    raindrop.style.position = 'absolute';
    raindrop.style.width = Math.random() * (2 - 1) + 1 + 'px';
    raindrop.style.height = Math.random() * (20 - 8) + 8 + 'px';
    raindrop.style.background = 'cyan';
    raindrop.style.borderRadius = '50%';
    raindrop.style.left = Math.random() * document.body.scrollWidth + 'px';
    raindrop.style.top = '-20px';
    raindrop.style.opacity = 0.5;
    raindrop.style.pointerEvents = 'none';
    raindrop.style.zIndex = 9999;

    const initialFallDuration = Math.random() * (5 - 0.8) + 0.8;
    raindrop.style.transition = `top ${initialFallDuration}s linear`;

    document.body.appendChild(raindrop);

    setTimeout(() => {
        raindrop.style.top = window.scrollY + window.innerHeight - 10 + 'px';
    }, 50);

    setTimeout(() => {
        raindrop.style.transition = 'top 5s linear, left 5s ease-in-out, opacity 5s ease';
        raindrop.style.top = (parseFloat(raindrop.style.top) + (Math.random() * 100 + 50)) + 'px';
        raindrop.style.left = (parseFloat(raindrop.style.left) + (Math.random() * 40 - 20)) + 'px';
        raindrop.style.opacity = 0;
    }, 1100);

    setTimeout(() => {
        raindrop.remove();
    }, 7000);
}

function raindropLoop() {
    if (raindropActive) {
        createraindrop();
        const nextTime = Math.random() * (5 - 1) + 5;
        setTimeout(raindropLoop, nextTime);
    }
}

document.getElementById('toggleRain').addEventListener('click', function() {
    raindropActive = !raindropActive;
    localStorage.setItem('raindropActive', raindropActive); // save the new state
    if (raindropActive) {
        raindropLoop();
        rainAudio.play();
    } else {
        rainAudio.pause();
    }
});

// If rain was already active, start it automatically
if (raindropActive) {
    raindropLoop();
    rainAudio.play();
}
///////////////////////////