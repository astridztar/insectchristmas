//////////////////////////////////////
// animated smiley
var smileyClosed = "=^)";
var smileyOpen = "=v)";
var smileyOpenNote = "=^D";
var smileyClosedNote = "=vD"
//////////////////////////////////////
            
// slow alarm
setInterval(smileyTimer, 1000);
function smileyTimer() {
    // animated smileys
    var smileys = document.getElementById('smiley');
    if(smileys.innerText === smileyClosed) {
        smileys.innerText = smileyOpen;
    } else if(smileys.innerText === smileyOpen) {
        smileys.innerText = smileyOpenNote;
    } else if(smileys.innerText === smileyOpenNote) {
        smileys.innerText = smileyClosedNote;
    } else {
        smileys.innerText = smileyClosed;
    }
}
//////////////////////////////////////