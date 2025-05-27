const fxbar = document.getElementById('fxbar');

fxbar.innerHTML = `
  <div style="display: flex; justify-content: center; align-items: center; width: 100%; font-family: monospace; gap: 0.5em; padding: 0.5em;">
    <div>
      <button id="toggleTime">toggle clock</button>
      <button id="toggleRain">toggle rain</button>
      <button id="toggleButterflies">toggle ʚïɞ</button>
      <button id="toggleInvert">toggle 🌑</button>
    </div>
    <div style="padding: 0.5em;">
      <span id="systemClock"></span>
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  ///////////////////////////
  // rain toggle
  let raindropActive = localStorage.getItem('raindropActive') === 'true';
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
    raindrop.style.transition = `top ${Math.random() * (5 - 0.8) + 0.8}s linear`;

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
      setTimeout(raindropLoop, Math.random() * (5 - 1) + 5);
    }
  }

  document.getElementById('toggleRain').addEventListener('click', function () {
    raindropActive = !raindropActive;
    localStorage.setItem('raindropActive', raindropActive);
    if (raindropActive) {
      raindropLoop();
      rainAudio.play();
    } else {
      rainAudio.pause();
    }
  });

  if (raindropActive) {
    raindropLoop();
    rainAudio.play();
  }

  ///////////////////////////
  // invert toggle
  let invertActive = localStorage.getItem('invertActive') === 'true';
  const toggleInvertBtn = document.getElementById('toggleInvert');

  function applyInvert(active) {
    document.body.classList.toggle('invert-mode', active);
    localStorage.setItem('invertActive', active);
  }

  function updateInvertButtonText(active) {
    toggleInvertBtn.textContent = active ? 'toggle 🌕' : 'toggle 🌑';
  }

  document.getElementById('toggleInvert').addEventListener('click', function () {
    invertActive = !invertActive;
    applyInvert(invertActive);
    updateInvertButtonText(invertActive);
  });

  applyInvert(invertActive);
  updateInvertButtonText(invertActive);

  ///////////////////////////
  // butterfly toggle
    const trail = document.getElementById('trail');
    let butterfliesActive = localStorage.getItem('butterfliesActive') === 'true';
    
    // set initial state
    trail.style.display = butterfliesActive ? 'block' : 'none';
    
    document.getElementById('toggleButterflies').addEventListener('click', () => {
      butterfliesActive = !butterfliesActive;
      trail.style.display = butterfliesActive ? 'block' : 'none';
      localStorage.setItem('butterfliesActive', butterfliesActive);
    });

  ///////////////////////////
  // time toggle
  const clock = document.getElementById('systemClock');
  const clockVisible = localStorage.getItem('clockVisible') === 'true';
  clock.style.display = clockVisible ? 'inline' : 'none';

  document.getElementById('toggleTime').addEventListener('click', () => {
    const nowVisible = clock.style.display === 'none';
    clock.style.display = nowVisible ? 'inline' : 'none';
    localStorage.setItem('clockVisible', nowVisible);
  });

  ///////////////////////////
  // system clock
    function updateClock() {
      const now = new Date();
      let h = now.getHours();
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const hour12 = h % 12 || 12;
      const ampm = h < 12 ? 'am' : 'pm';
    
      let emoji = '';
      if (h === 0) emoji = '🌑';
      else if (h === 1) emoji = '🌘';
      else if (h === 2) emoji = '🌗';
      else if (h === 3) emoji = '🌖';
      else if (h === 4) emoji = '🌕';
      else if (h >= 5 && h <= 8) emoji = '🌄';
      else if (h >= 9 && h <= 17) emoji = '🌞';
      else if (h >= 18 && h <= 20) emoji = '🌅';
      else if (h === 21) emoji = '🌕';
      else if (h === 22) emoji = '🌓';
      else if (h === 23) emoji = '🌒';
    
      const timeStr = `${emoji} ${String(hour12).padStart(2, '0')}:${m}:${s} ${ampm}`;
      document.getElementById('systemClock').textContent = timeStr;
    }

  setInterval(updateClock, 1000);
  updateClock();
});