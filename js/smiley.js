//////////////////////////////////////
// define smiley sets for each page
var smileySet;

// smiley default
// will show this if no custom available
var defaultSmileys = {
    closed: "=^)",
    open: "=v)",
    openNote: "=^D",
    closedNote: "=vD"
};
// clown
var videoSmileys = {
    closed: "3=o)",
    open: "3=oD",
    openNote: "3=oO",
    closedNote: "3=o("
};
// guy freaking out and swearing
var comicSmileys = {
    closed: "8^0",
    open: ">8^#",
    openNote: "8v0",
    closedNote: ">8v#"
};
// pencil drawing
var artSmileys = {
    closed: "c==>.",
    open: "==>..",
    openNote: "=>...",
    closedNote: ">...."
};
// video game controller
var gamesSmileys = {
    closed: "[O,.+]",
    open: "[o,.+]",
    openNote: "[O,.+]",
    closedNote: "[O,.x]"
};
// stickman waving arms around
var thoughtsSmileys = {
    closed: "o-<-<",
    open: "o-/-<",
    openNote: "o-|-<",
    closedNote: "o-\\-<"
};
// bow & arrow shooting arrow
var externalSmileys = {
    closed: "<}>",
    open: "|}=~>",
    openNote: "} =~>",
    closedNote: " =~>|"
};
// cigarette burning away
var otherSmileys = {
    closed: ".w===",
    open: ".W===",
    openNote: "_.===",
    closedNote: "_.,=="
};
// tired & sweating
var writingSmileys = {
    closed: "_=w=;",
    open: "=w=.",
    openNote: ";=w=_",
    closedNote: ".=w="
};
// scrolling caterpillar
var aboutSmileys = {
    closed: ">CcCcC",
    open: "cCcᐟ__",
    openNote: "Cᐟ__>C",
    closedNote: "__>cCc"
};
// dollar bill burning away
var donorsSmileys = {
    closed: "[_($)_]",
    open: "wW($)_]",
    openNote: ".,Ww)_]",
    closedNote: "__.,wW]"
};
// q & a discussion
var faqSmileys = {
    closed: ":0 <(Q)",
    open: ":) <(Q)",
    openNote: "(A)> 0:",
    closedNote: "(A)> (:"
};
// pikachu
var pokemonSmileys = {
    closed: "o^_^o",
    open: "o=_=o",
    openNote: "o0_0o",
    closedNote: "o-_-o"
};
// bouncing booba
var animeSmileys = {
    closed: "(. , .)",
    open: "{, Y ,}",
    openNote: "(. , .)",
    closedNote: "{, Y ,}"
};
// firin' my lazar
var gamingSmileys = {
    closed: ":)___",
    open: ":0=__",
    openNote: ":0===",
    closedNote: "====="
};
// cassette tape
var interviewSmileys = {
    closed: "[o=o]_",
    open: "_[o=o]",
    openNote: "[o=o].",
    closedNote: ".[o=o]"
};
// running mouse
var nowSmileys = {
    closed: "<8=~_",
    open: "=~___",
    openNote: "_____",
    closedNote: "___<8"
};
// blinking cat
var kiwiSmileys = {
    closed: "=(0 v 0)=",
    open: "=(o v o)=",
    openNote: "=(- . -)=",
    closedNote: "=(o . o)="
};

//////////////////////////////////////////////////////////////

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
} else if (path.includes("interviews")) {
    smileySet = interviewSmileys;
} else if (path.includes("now")) {
    smileySet = nowSmileys;
} else if (path.includes("kiwi")) {
    smileySet = kiwiSmileys;
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