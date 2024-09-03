// get detection ids
var detection = document.getElementById('detection');
var detection2 = document.getElementById('detection2');

// detect web browser
if (navigator.userAgent.includes("Chrome")) {
    detection.innerText = "you are using an inferior web browser. disgusting.";
} else if (navigator.userAgent.includes("Vivaldi")) {
    detection.innerText = "vivaldi? what the hell is a vivaldi?";
} else if (navigator.userAgent.includes("Safari")) {
    detection.innerText = "safari? you scumbag.";
} else if (navigator.userAgent.includes("AppleWebKit")) {
    detection.innerText = "you're using an apple product? what's wrong with you?";
} else if (navigator.userAgent.includes("Edge") || navigator.userAgent.includes("Edg")) {
    detection.innerText = "living on the edge, huh? use a better web browser..";
} else if (navigator.userAgent.includes("Firefox") || navigator.userAgent.includes("Mozilla")) {
    detection.innerText = "thanks for using firefox!";
} else {
    detection.innerText = "error detecting web browser...";
}

// detect operating system
if (navigator.userAgent.includes("Linux")) {
    detection2.innerText = "thanks for using linux!";
} else if (navigator.userAgent.includes("Android")) {
    detection2.innerText = "android user detected...";
} else {
    detection2.innerText = "please switch to linux...";
}