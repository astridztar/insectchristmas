//////////////////////////////////////
// define smiley sets for each page
var smileySet;

var defaultSmileys = {
    closed: "=^)",
    open: "=v)",
    openNote: "=^D",
    closedNote: "=vD"
};

var videoSmileys = {
    closed: "3=o)",
    open: "3=oD",
    openNote: "3=oO",
    closedNote: "3=o("
};

var comicSmileys = {
    closed: "8^0",
    open: ">8^#",
    openNote: "8v0",
    closedNote: ">8v#"
};

var artSmileys = {
    closed: "c==>.",
    open: "==>..",
    openNote: "=>...",
    closedNote: ">...."
};

var gamesSmileys = {
    closed: "[O,.+]",
    open: "[o,.+]",
    openNote: "[O,.+]",
    closedNote: "[O,.x]"
};

var thoughtsSmileys = {
    closed: "o-<-<",
    open: "o-/-<",
    openNote: "o-|-<",
    closedNote: "o-\\-<"
};

var externalSmileys = {
    closed: "<}>",
    open: "|}=~>",
    openNote: "} =~>",
    closedNote: " =~>|"
};

var otherSmileys = {
    closed: ".w===",
    open: ".W===",
    openNote: "_.===",
    closedNote: "_.,=="
};

var writingSmileys = {
    closed: "_=w=;",
    open: "=w=.",
    openNote: ";=w=_",
    closedNote: ".=w="
};

var aboutSmileys = {
    closed: ">CcCcC",
    open: "cCcᐟ__",
    openNote: "Cᐟ__>C",
    closedNote: "__>cCc"
};

var donorsSmileys = {
    closed: "[_($)_]",
    open: "wW($)_]",
    openNote: ".,Ww)_]",
    closedNote: "__.,wW]"
};

var faqSmileys = {
    closed: ":0 <(Q)",
    open: ":) <(Q)",
    openNote: "(A)> 0:",
    closedNote: "(A)> (:"
};

var pokemonSmileys = {
    closed: "o^_^o",
    open: "o=_=o",
    openNote: "o0_0o",
    closedNote: "o-_-o"
};

var animeSmileys = {
    closed: "(. , .)",
    open: "{, Y ,}",
    openNote: "(. , .)",
    closedNote: "{, Y ,}"
};

var gamingSmileys = {
    closed: ":)___",
    open: ":0=__",
    openNote: ":0===",
    closedNote: "====="
};

// detect page and set the smiley set
var path = window.location.pathname;
if (path.includes("video")) {
    smileySet = videoSmileys;
} else if (path.includes("comic")) {
    smileySet = comicSmileys;
} else if (path.includes("games")) {
    smileySet = gamesSmileys;
} else if (path.includes("thoughts")) {
    smileySet = thoughtsSmileys;
} else if (path.includes("art")) {
    smileySet = artSmileys;
} else if (path.includes("external")) {
    smileySet = externalSmileys;
} else if (path.includes("other")) {
    smileySet = otherSmileys;
} else if (path.includes("writing")) {
    smileySet = writingSmileys;
} else if (path.includes("about")) {
    smileySet = aboutSmileys;
} else if (path.includes("donors")) {
    smileySet = donorsSmileys;
} else if (path.includes("faq")) {
    smileySet = faqSmileys;
} else if (path.includes("anime")) {
    smileySet = animeSmileys;
} else if (path.includes("pokemon")) {
    smileySet = pokemonSmileys;
} else if (path.includes("gaming")) {
    smileySet = gamingSmileys;
} else {
    smileySet = defaultSmileys;
}

//////////////////////////////////////
// animated smileys
var smileyClosed = smileySet.closed;
var smileyOpen = smileySet.open;
var smileyOpenNote = smileySet.openNote;
var smileyClosedNote = smileySet.closedNote;

//////////////////////////////////////
// slow alarm
setInterval(smileyTimer, 500);
function smileyTimer() {
    // Animated smileys
    var smileys = document.getElementById('smiley');
    if (smileys.innerText === smileyClosed) {
        smileys.innerText = smileyOpen;
    } else if (smileys.innerText === smileyOpen) {
        smileys.innerText = smileyOpenNote;
    } else if (smileys.innerText === smileyOpenNote) {
        smileys.innerText = smileyClosedNote;
    } else {
        smileys.innerText = smileyClosed;
    }
}
//////////////////////////////////////