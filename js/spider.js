/*
    grab spider element &
    spider frames for animation
*/
const spiderElement = document.getElementById('spider');
const spiderFrames = [
    '/V(88vv88)V\\',
    '__/V( 88vv88)V\\',
    '____/V(88^^88)V\\',
    '__/V(88^^88 )V\\',
    '_/V( 88--88 )V\\'
];

/* 
    helper function to get a random hex color
*/
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/*
    actually animate the spider
*/
function animateSpider() {
    let position = 0;
    let direction = 1;
    let frameIndex = 0;
    const screenWidth = window.innerWidth;
    const spiderSpeed = 10;

    setInterval(() => {
        spiderElement.innerHTML = `<span style="color:${getRandomColor()};">${spiderFrames[frameIndex]}</span>`;
        frameIndex = (frameIndex + 1) % spiderFrames.length;

        // spider back & forth
        position += direction * 10;
        if (position <= 0 || position >= screenWidth - spiderElement.offsetWidth) {
            direction *= -1;
        }

        spiderElement.style.left = `${position}px`;
    }, 240); // framerate
}

window.onload = animateSpider;