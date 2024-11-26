let izzy = document.getElementById("izzy");
let izzyClicks = localStorage.getItem('izzy_clicks') || 0;

const izzyEmotions = [
    '^_^', '^o^', '^~^', "^v^", "^x^", "^D^", "^c^", "^.^", "^,^", "^u^", "^-^"
];

izzy.addEventListener("click", function() {
    // increment izzyClicks
    izzyClicks++;

    localStorage.setItem('izzy_clicks', izzyClicks);
    
    // grab random emotion
    let randomEmotion = izzyEmotions[Math.floor(Math.random() * izzyEmotions.length)];
    let message = "";
    
    if(izzyClicks == 1) {
        message = "izzy seems rather puzzled.\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " time.";
    } else if(izzyClicks > 1 && izzyClicks < 5) {
        message = "maybe she's getting used to you?\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks >= 5 && izzyClicks < 10) {
        message = "she starts gnawing on you...\n\n izzy: " + String("^w^") + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks >= 10 && izzyClicks < 20) {
        message = "izzy is bored of this. maybe you should give up?\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks == 50) {
        message = "dude, you're gonna squish her...\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks >= 60 && izzyClicks <= 75) {
        message = "oh god... her wings won't work anymore...\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks >= 90 && izzyClicks <= 99) {
        message = "STOP!!!!!!!!!!!!!!!!!!!!!!\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks >= 100 && izzyClicks <= 499) {
        message = "izzy has died. you moron. you f#cking killed her.\n\n izzy: " + String("X_X") + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks >= 500 && izzyClicks <= 999) {
        message = "get a life, scumbag.\n\n izzy: " + String("X_X") + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks >= 1000 && izzyClicks <= 4999) {
        message = "RECONSIDER EXISTING!!!!!!! F#CK!!!.\n\n izzy: " + String("X_X") + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else if(izzyClicks >= 5000) {
        message = "okay. you revived her. happy?\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    } else {
        message = "stop clicking her! wtf!\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.";
    }

    alert(message);
});