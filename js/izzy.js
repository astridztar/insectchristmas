// firstly, grab izzy
var izzy = document.getElementById("izzy");

// local storage
// by kyledoesdev on github
let izzyClicks = localStorage.getItem('izzy_clicks') || 0;

const izzyEmotions = [
    '^_^', '^o^', '^~^', "^v^", "^x^", "^D^", "^c^", "^.^", "^,^", "^u^", "^-^"
];

izzy.addEventListener("click", function() {
    // increment izzyClicks
    izzyClicks++;
    
    // local storage
    // by kyledoesdev on github
    localStorage.setItem('izzy_clicks', izzyClicks);
    
    // grab random emotion
    var randomEmotion = izzyEmotions[Math.floor(Math.random() * izzyEmotions.length)];
    
    //// izzy decision tree
    // popups each click
    if(izzyClicks == 1) {
        alert("izzy seems rather puzzled.\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " time.")
    } else if(izzyClicks > 1 && izzyClicks < 5) {
        alert("maybe she's getting used to you?\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks >= 5 && izzyClicks < 10) {
        alert("she starts gnawing on you...\n\n izzy: " + String("^w^") + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks >= 10 && izzyClicks < 20) {
        alert("izzy is bored of this. maybe you should give up?\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks == 50) {
        alert("dude, you're gonna squish her...\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks >= 60 && izzyClicks <= 75) {
        alert("oh god... her wings won't work anymore...\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks >= 90 && izzyClicks <= 99) {
        alert("STOP!!!!!!!!!!!!!!!!!!!!!!\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks >= 100 && izzyClicks <= 499) {
        alert("izzy has died. you moron. you f#cking killed her.\n\n izzy: " + String("X_X") + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks >= 500 && izzyClicks <= 999) {
        alert("get a life, scumbag.\n\n izzy: " + String("X_X") + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks >= 1000 && izzyClicks <= 4999) {
        alert("RECONSIDER EXISTING!!!!!!! F#CK!!!.\n\n izzy: " + String("X_X") + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else if(izzyClicks >= 5000) {
        alert("okay. you revived her. happy?\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    } else {
        alert("stop clicking her! wtf!\n\n izzy: " + String(randomEmotion) + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.")
    }
})