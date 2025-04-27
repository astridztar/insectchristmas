// firstly, grab izzy
var izzy = document.getElementById("izzy");

// local storage
// by kyledoesdev on github
let izzyClicks = localStorage.getItem('izzy_clicks') || 0;

const izzyEmotions = [
    '^_^', '^o^', '^~^', "^v^", "^x^", "^D^", "^c^", "^.^", "^,^", "^u^", "^-^"
];

const izzyClickRules = [
    { type: "range", min: 5000, max: Infinity, message: "okay. you revived her. happy?" },
    { type: "range", min: 1000, max: 4999, message: "RECONSIDER EXISTING!!!!!!! F#CK!!!." },
    { type: "range", min: 500, max: 999, message: "get a life, scumbag." },
    { type: "range", min: 100, max: 499, message: "izzy has died. you moron. you f#cking killed her." },
    { type: "range", min: 90, max: 99, message: "STOP!!!!!!!!!!!!!!!!!!!!!!" },
    { type: "range", min: 60, max: 75, message: "oh god... her wings won't work anymore..." },
    { type: "exact", value: 50, message: "dude, you're gonna squish her..." },
    { type: "range", min: 10, max: 19, message: "izzy is bored of this. maybe you should give up?" },
    { type: "range", min: 5, max: 9, message: "she starts gnawing on you..." } ,
    { type: "range", min: 2, max: 4, message: "maybe she's getting used to you?" },
    { type: "exact", value: 1, message: "izzy seems rather puzzled." }
];

function outputIzzyMessage(izzyClicks) {
    // grab random emotion
    var randomEmotion = izzyEmotions[Math.floor(Math.random() * izzyEmotions.length)];

    // default izzy message
    let izzyMessage = "stop clicking her! wtf!";

    // default izzy emotion
    let izzyEmotion = String(randomEmotion);

    for (let i = 0; i < izzyClickRules.length; i++) {
        const rule = izzyClickRules[i];

        if (rule.type === "exact" && izzyClicks === rule.value) {
            izzyMessage = rule.message;
            break;

        } else if (rule.type === "range" && izzyClicks >= rule.min && izzyClicks <= rule.max) {
            // If between following ranges add hard coded faces
            if (izzyClicks >= 100 && izzyClicks < 5000 ) {
                izzyEmotion = String("X_X");
            } else if (izzyClicks >= 5 && izzyClicks < 10 ) {
                izzyEmotion = String("^W^");
            }

            izzyMessage = rule.message;
            break;
        }   
    }

    // Output message in alert
    alert(izzyMessage + "\n\nizzy: " + izzyEmotion + "\n\nyou have clicked izzy " + String(izzyClicks) + " times.");
}

izzy.addEventListener("click", function() {
    // increment izzyClicks
    izzyClicks++;
    
    // local storage
    // by kyledoesdev on github
    localStorage.setItem('izzy_clicks', izzyClicks);
    
    //// izzy decision tree
    // popups each click
    outputIzzyMessage(izzyClicks);
})