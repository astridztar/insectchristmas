/////////////////////////////////////
// random ladybug pull
/////////////////////////////////////

// randomize ladybug (256,000 possibilities)
var ladybug = Math.floor(Math.random() * 256000);

// test hard-coded
//var ladybug = 12344;

// set littlefucker to display ladybug pull
document.getElementById("littlefucker").innerHTML = ladybug.toString();

////////////////////////////////////////////////////////////////////            

// replace images function
function replaceImagesWithRandom() {
    // get all image elements on page
    const images = document.querySelectorAll('img');

    function getRandomImageUrl() {
        const keywords = ['nature', 'cats', 'technology', 'space', 'abstract'];
        const keyword = generateRandomString();
        const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
        return `https://i.imgur.com/${keyword}.gif3413`;
    }

    // replace each image's src with a random image url
    images.forEach((img) => {
        img.src = getRandomImageUrl();
    });
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < 7; i++) {
        // generate a random index to
        // pick a character from the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

//replaceImagesWithRandom();

///////////////////////////////////////////////////////////////////

// operate ladybug pull3413
switch (ladybug) {
    case 117:
        function117();
        break;
    case 420:
        function420();
        break;
    case 512:
        setInterval(function512, 1000);
        break;
    case 666:
        function666();
        break;
    case 777:
        function777();
        break;
    case 1000:
        randomizeCharacterSizes(document.body);
        break;
    case 1001:
        function1001();
        break;
    case 6666:
        function666();
        break;
    case 11110:
    case 11111:
    case 11112:
    case 11113:
    case 11114:
    case 11115:
    case 11116:
    case 11117:
    case 11118:
    case 11119:
    case 11120:
    case 11121:
    case 11122:
    case 11123:
    case 11124:
    case 11125:
    case 11126:
    case 11127:
    case 11128:
    case 11129:
    case 11130:
    case 11131:
    case 11132:
    case 11133:
    case 11134:
    case 11135:
    case 11136:
    case 11137:
    case 11138:
    case 11139:
    case 11140:
    case 11141:
    case 11142:
    case 11143:
    case 11144:
    case 11145:
    case 11146:
    case 11147:
    case 11148:
    case 11149:
    case 11150:
    case 11151:
    case 11152:
    case 11153:
    case 11154:
    case 11155:
    case 11156:
    case 11157:
    case 11158:
    case 11159:
    case 11160:
    case 11161:
    case 11162:
    case 11163:
    case 11164:
    case 11165:
    case 11166:
    case 11167:
    case 11168:
    case 11169:
    case 11170:
    case 11171:
    case 11172:
    case 11173:
    case 11174:
    case 11175:
    case 11176:
    case 11177:
    case 11178:
    case 11179:
    case 11180:
    case 11181:
    case 11182:
    case 11183:
    case 11184:
    case 11185:
    case 11186:
    case 11187:
    case 11188:
    case 11189:
    case 11190:
    case 11191:
    case 11192:
    case 11193:
    case 11194:
    case 11195:
    case 11196:
    case 11197:
    case 11198:
    case 11199:
        shakeElements();
        break;
    case 12340:
    case 12341:
    case 12342:
    case 12343:
    case 12344:
    case 12345:
    case 12346:
    case 12347:
    case 12348:
    case 12349:
        createMatrixFall();
        break;
    case 44444:
        // SCREAMER !!! AAAAAAA!!!!!!! [WHOA!!!]
        function44444();
        break;
    case 60000:
    case 60001:
    case 60002:
    case 60003:
        invertPage();
        break;
    case 65000:
        function65000();
        break;
    case 66666:
        function666();
        break;
    case 69000:
    case 69001:
    case 69002:
    case 69003:
    case 69004:
    case 69005:
    case 69006:
    case 69007:
    case 69008:
    case 69009:
    case 69010:
        randomizeStyles();
        break;
    case 75000:
    case 75001:
    case 75002:
    case 75003:
    case 75004:
    case 75005:
    case 75006:
    case 75007:
    case 75008:
    case 75009:
    case 75010:
    case 75011:
    case 75012:
    case 75013:
    case 75015:
        createBouncingEmoticons();
        break;
    case 80085:
        // boobies
        boobies();
        break;
    case 150000:
    case 150001:
    case 150002:
    case 150003:
    case 150004:
        createBouncingDVD();
        break;
    case 175000:
    case 175001:
    case 175002:
    case 175003:
    case 175004:
        makeElementsJiggleOnHover();
        break;
    case 188000:
    case 188001:
    case 188002:
    case 188003:
    case 188004:
        insaneLaughter();
        break;
    case 197699:
        // function 197699 september 9th 1976
        function197699();
        break;
    case 255999:
        function360000();
        break;
    case 256000:
        setInterval(function256000, 100);
        break;
    default:
        var element = document.getElementById('littlefucker');
        element.innerHTML = ladybug + "<br><br><b style='color:yellow;'>no luck! refresh to try again!<br>1 in ~1620 refreshes strike gold!</b>";
        // 158 / 256,000 implemented
        // 256,000 divided by number on left to get probability
        break;
}

// display laughs like crazy
function insaneLaughter() {
    const numlaughs = 1000; // number of laughs to display
    const laughSize = 50; // size of the laugh in pixels
    const laughImages = [
        'LOL', 'XD', 'ROFL', "LMFAO", "OMG"
    ];

    function createlaugh() {
        const laugh = document.createElement('div');
        laugh.innerText = laughImages[Math.floor(Math.random() * laughImages.length)];
        laugh.style.position = 'fixed';
        laugh.style.fontSize = `${laughSize}px`;
        laugh.style.color = 'white';
        laugh.style.left = `${Math.random() * 100}vw`;
        laugh.style.top = `${Math.random() * 100}vh`;
        laugh.style.zIndex = '-1';
        laugh.style.pointerEvents = 'none';
        laugh.style.animation = `flicker ${Math.random() * 1 + 1}s infinite alternate`;

        document.body.appendChild(laugh);

        // laugh decay
        setTimeout(() => {
            laugh.remove();
        }, 10); // laughs last for x seconds
    }

    setInterval(createlaugh, 1);

    // css flicker animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes flicker {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// 117 ladybug pull
// 117 haha funny (replace intro html with 117)
function function117() {
    var element = document.getElementById('intro');
    element.innerHTML = '<br>117';
}

// 420 ladybug pull
// turn colors green like weed
function function420() {
    var elements = document.getElementsByTagName('*');
    for (var i = elements.length - 1; i >= 0; i--) {
        elements[i].style.color = 'green';
    }
}

// 512 ladybug pull
// swap html around forever
function function512() {
    var elements = document.getElementsByTagName('p');
    var i = Math.floor(Math.random() * elements.length);
    if (i < 1) {
        i = i + 1;
    }
    //for(var i = elements.length - 1; i>=0; i--){
    var quicksave = elements[i].innerHTML;
    var quicksave2 = elements[i - 1].innerHTML;
    elements[i - 1].innerHTML = quicksave;
    elements[i].innerHTML = quicksave2;
    //}

}
// 666 ladybug pull
// red text (evil!!!!!)
function function666() {
    var elements = document.getElementsByTagName('*');
    for (var i = elements.length - 1; i >= 0; i--) {
        elements[i].style.color = 'red';
    }
}
// 777 ladybug pull
// jackpot scary lucky roll funny voice haha!
function function777() {
    //var element = document.getElementById('intro');
    //element.innerHTML = '<img src="images/mao.jpg">';
    var videoElement = document.getElementById('stars');
    videoElement.setAttribute('src', 'videos/777.mp4')
    videoElement.muted = !videoElement.muted;
    videoElement.volume = 0.50;
    var audioElement = document.getElementById('audioA');
    audioElement.volume = 0;
}

// 1000 ladybug pull
// change character sizes randomly 10-100px
function randomizeCharacterSizes(node) {
    // check if node is text node
    if (node.nodeType === Node.TEXT_NODE) {
        // split text into characters
        let text = node.textContent;
        let container = document.createElement('span');

        // loop through each character in the text node
        for (let i = 0; i < text.length; i++) {
            let char = text[i];

            // create span element for each character
            let span = document.createElement('span');
            span.innerText = char;

            // randomly set font size (10px-100px)
            let randomFontSize = Math.floor(Math.random() * 101) + 10; // 10px to 100px
            span.style.fontSize = randomFontSize + 'px';

            container.appendChild(span);
        }

        // replace original text node with new span container
        node.parentNode.replaceChild(container, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        // ignore specific tags
        let tagName = node.tagName.toLowerCase();
        if (tagName !== 'button' &&
            tagName !== 'a' &&
            tagName !== 'img' &&
            tagName !== 'table' &&
            tagName !== 'br') {
            // recursive
            for (let i = 0; i < node.childNodes.length; i++) {
                randomizeCharacterSizes(node.childNodes[i]);
            }
        }
    }
}

///// ****************** TODO      
// 1001 ladybug pull
// inverts colors
function function1001() {
    var elements = document.getElementsByTagName('*');
    for (var i = elements.length - 1; i >= 0; i--) {
        if (elements[i].style.color == 'chartreuse') {
            elements[i].style.color = 'rgb(128,0,255)';
        }
    }
}
///// ******************

// 11111 ladybug pull
// shake the elements around like an earthquake
function shakeElements() {
    // get all elements
    const elements = document.querySelectorAll('img');
    const elements2 = document.querySelectorAll('div');
    const elements3 = document.querySelectorAll('object');

    // apply shaking effect to an element
    function shake(element) {
        let startX = 0;
        let startY = 0;
        const intensity = 5; // intensity of the shake (in pixels)

        function applyShake() {
            const randomX = Math.random() * intensity * 5 - intensity;
            const randomY = Math.random() * intensity * 5 - intensity;
            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
            requestAnimationFrame(applyShake);
        }
        applyShake();
    }

    // apply shake effect to each element
    elements.forEach((element) => {
        shake(element);
    });
    elements2.forEach((element) => {
        shake(element);
    });
    elements3.forEach((element) => {
        shake(element);
    });

    // stop shaking after a certain period
    setTimeout(() => {
        elements.forEach((element) => {
            element.style.transform = ''; // reset transform property
        });
        elements2.forEach((element) => {
            element.style.transform = '';
        });
        elements3.forEach((element) => {
            element.style.transform = '';
        });
    }, 5000); // 5 second shake
}

// 12345 ladybug pull
// matrix number fall, reformatted from a snowflake function
function createMatrixFall() {
    const snowflakes = ['1', '0', '11', '10', '.']; // binary code
    const numFlakes = 10000; // number of created items
    const body = document.body;

    // create a single "snowflake"
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.innerText = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.position = 'fixed';
        snowflake.style.top = '-2rem';
        snowflake.style.fontSize = `${Math.random() * 5 + 1}rem`;
        snowflake.style.zIndex = '1000';
        snowflake.style.color = 'chartreuse';
        snowflake.style.pointerEvents = 'none';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.opacity = Math.random();
                
        body.appendChild(snowflake);

        // animate falling
        let fallSpeed = Math.random() * 1 + 1;
        let currentPosition = -2;
        let leftPosition = parseFloat(snowflake.style.left);

        function fall() {
            currentPosition += fallSpeed;
            snowflake.style.top = `${currentPosition}vh`;

            // make  snowflake sway left right
            snowflake.style.left = `${leftPosition + Math.sin(currentPosition / 10) * 2}vw`;

            // remove snowflake once it goes off screen
            if (currentPosition > 100) {
                snowflake.remove();
            } else {
                requestAnimationFrame(fall);
            }
        }

        fall();
    }

    // create multiple snowflakes
    for (let i = 0; i < numFlakes; i++) {
        setTimeout(createSnowflake, i * 10); // Stagger the creation of each snowflake
    }
}

// 44444 ladybug pull
// replace stars with funny 44444.mp4
function function44444() {
    //var element = document.getElementById('intro');
    //element.innerHTML = '<img src="images/mao.jpg">';
    var videoElement = document.getElementById('stars');
    videoElement.setAttribute('src', 'videos/44444.mp4')
    videoElement.muted = !videoElement.muted;
    videoElement.volume = 0.50;
    var audioElement = document.getElementById('audioA');
    audioElement.volume = 0;
}

// 65000 ladybug pull
// ladybug video :)
function function65000() {
    var videoElement = document.getElementById('stars');
    videoElement.setAttribute('src', 'videos/ladybugs.mp4')
    videoElement.muted = !videoElement.muted;
    videoElement.volume = 0.00;
}

// 80085 ladybug pull
// look at my beautiful home-grown boobies: (o ,. o)
function boobies() {
    const emoticons = [
        '(o ,. o)',
    ];

    // bouncing boob emoticon
    function createEmoticon() {
        const emoticon = document.createElement('div');
        emoticon.innerText = emoticons[Math.floor(Math.random() * emoticons.length)];
        emoticon.style.position = 'fixed';
        emoticon.style.fontSize = `${Math.random() * 2 + 1}rem`;
        emoticon.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        emoticon.style.left = `${Math.random() * 100}vw`;
        emoticon.style.top = `${Math.random() * 100}vh`;
        emoticon.style.zIndex = '1000';
        emoticon.style.pointerEvents = 'none';
        emoticon.style.animation = `flash 0.5s infinite, bounce 5s infinite linear`;

        document.body.appendChild(emoticon);

        // animate bouncing
        let dx = (Math.random() * 4) - 2; // Horizontal velocity
        let dy = (Math.random() * 4) - 2; // Vertical velocity

        function bounce() {
            let rect = emoticon.getBoundingClientRect();
            let x = rect.left + dx;
            let y = rect.top + dy;

            // Reverse direction if hitting edges
            if (x <= 0 || x + rect.width >= window.innerWidth) {
                dx *= -1;
            }
            if (y <= 0 || y + rect.height >= window.innerHeight) {
                dy *= -1;
            }

            // Move the emoticon
            emoticon.style.left = `${x}px`;
            emoticon.style.top = `${y}px`;

            requestAnimationFrame(bounce);
        }

        bounce();

        // decay
        setTimeout(() => {
            emoticon.remove();
        }, 5000); // x seconds
    }

    setInterval(createEmoticon, 10);

    // flashing effect
    const style = document.createElement('style');
    style.innerHTML = `
                @keyframes flash {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `;
    document.head.appendChild(style);

}

// 75000 ladybug pull
// bouncing emoticons :)
function createBouncingEmoticons() {
    const emoticons = [
        '^_^', '@_@', 'O_O', '>_<', '-_-', 'T_T', '^o^', '$_$', '(^_^)', '[o_o]', '*_*', 'x_x', ':)', ':D'
    ];

    function createEmoticon() {
        const emoticon = document.createElement('div');
        emoticon.innerText = emoticons[Math.floor(Math.random() * emoticons.length)];
        emoticon.style.position = 'fixed';
        emoticon.style.fontSize = `${Math.random() * 2 + 1}rem`;
        emoticon.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        emoticon.style.left = `${Math.random() * 100}vw`;
        emoticon.style.top = `${Math.random() * 100}vh`;
        emoticon.style.zIndex = '1000';
        emoticon.style.pointerEvents = 'none';
        emoticon.style.animation = `flash 0.5s infinite, bounce 5s infinite linear`;

        document.body.appendChild(emoticon);

        // bouncing animation
        let dx = (Math.random() * 4) - 2; // Horizontal velocity
        let dy = (Math.random() * 4) - 2; // Vertical velocity

        function bounce() {
            let rect = emoticon.getBoundingClientRect();
            let x = rect.left + dx;
            let y = rect.top + dy;

            // if hit edge, reverse direction
            if (x <= 0 || x + rect.width >= window.innerWidth) {
                dx *= -1;
            }
            if (y <= 0 || y + rect.height >= window.innerHeight) {
                dy *= -1;
            }

            // emoticon movement
            emoticon.style.left = `${x}px`;
            emoticon.style.top = `${y}px`;

            requestAnimationFrame(bounce);
        }

        bounce();

        // decay
        setTimeout(() => {
            emoticon.remove();
        }, 5000); // x seconds
    }

    setInterval(createEmoticon, 10);

    // flashing effect
    const style = document.createElement('style');
    style.innerHTML = `
                @keyframes flash {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `;
    document.head.appendChild(style);
}

// 69000 ladybug pull
// randomize styles using preset values
function randomizeStyles() {
    const properties = ['color', 'background-color', 'font-size', 'border', 'padding', 'margin', 'text-align'];
    const colors = ['chartreuse', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];
    const fontSizes = ['12px', '14px', '16px', '18px', '20px', '24px', '28px'];
    const borders = ['1px solid black', '2px dashed red', '3px dotted blue', '4px double green'];
    const textAligns = ['left', 'center', 'right', 'justify'];
    const sizes = ['5px', '10px', '15px', '20px'];

    // get a random item from an array
    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // get all elements on page
    const elements = document.querySelectorAll('*');

    // loop through each element -> apply random styles
    elements.forEach((element) => {
        //element.style.color = getRandomItem(colors);
        //element.style.backgroundColor = getRandomItem(colors);
        element.style.fontSize = getRandomItem(fontSizes);
        element.style.border = getRandomItem(borders);
        //element.style.padding = getRandomItem(sizes);
        //element.style.margin = getRandomItem(sizes);
        element.style.textAlign = getRandomItem(textAligns);
    });
}

// 197699 ladybug pull
// maoposting
function function197699() {
    var element = document.getElementById('intro');
    element.innerHTML = '<img src="images/mao.jpg">';
    var videoElement = document.getElementById('stars');
    videoElement.setAttribute('src', 'videos/mao.mp4')
    videoElement.muted = !videoElement.muted;
    videoElement.volume = 0.07;
    var audioElement = document.getElementById('audioA');
    audioElement.volume = 0;
}

// 256000 ladybug pull
// super crazy random colors & dancing
function function256000() {
    var elements = document.getElementsByTagName('*');
    var i = Math.floor(Math.random() * elements.length);
    elements[i].style.backgroundColor = getRandomColor();
    elements[i].style.color = getRandomColor();
    elements[i].style.fontSize = Math.floor(Math.random() * 3 + 10).toString() + 'px';
}
// 360000 ladybug pull
// change all images to trollface
function function360000() {
    var images = document.getElementsByTagName('img');
    var srcList = [];
    for (var i = 0; i < images.length; i++) {
        srcList.push(images[i].src);
        images[i].src = "images/ladybugs/trollface.png";
    }
}

// ??? ladybug pull
// bouncing dvd logo !!! wowzers !!! repurposed cat image function
function createBouncingDVD() {
    const numCats = 1;
    const catImages = [];

    // function to create a bouncing cat image
    function createCatImage() {
        const cat = document.createElement('img');
        cat.src = 'https://insect.christmas/images/ladybugs/dvd.png';
        cat.style.position = 'fixed';
        cat.style.width = '100px';
        cat.style.height = '100px';
        cat.style.left = `${Math.random() * 100}vw`;
        cat.style.top = `${Math.random() * 100}vh`;
        cat.style.zIndex = '1000';
        cat.style.pointerEvents = 'none';

        document.body.appendChild(cat);

        let dx = (Math.random() * 10) - 2; // h velocity
        let dy = (Math.random() * 10) - 2; // v velocity

        function bounce() {
            let rect = cat.getBoundingClientRect();
            let x = rect.left + dx;
            let y = rect.top + dy;

            // reverse direction if hitting edges
            if (x <= 0 || x + rect.width >= window.innerWidth) {
                dx *= -1;
            }
            if (y <= 0 || y + rect.height >= window.innerHeight) {
                dy *= -1;
            }

            // Move the cat image
            cat.style.left = `${x}px`;
            cat.style.top = `${y}px`;

            requestAnimationFrame(bounce);
        }

        bounce();

        return cat;
    }

    // create multiple bouncing images
    for (let i = 0; i < numCats; i++) {
        catImages.push(createCatImage());
    }
}

// ladybug ???
// image jiggle when hover
function makeElementsJiggleOnHover() {
    // function to handle the mouseover event
    function doJiggle(event) {
        event.target.style.fontSize = Math.random() * 10 + 12 + "px";
    }

    document.body.addEventListener('mouseover', doJiggle);
}

// ladybug ???
// RANDOMIZED about words
function randomizeWords() {
    // get entire body text content
    let bodyText = document.getElementById(str(a)).innerText;

    // split the text into an array of words (using spaces and line breaks as separators)
    let wordsArray = bodyText.split(/\s+/);

    // shuffle array of words
    for (let i = wordsArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
    }

    // join words into single string
    let randomizedText = wordsArray.join(' ');

    // replace body content with randomized text
    document.getElementById(str(a)).innerText = randomizedText;
}

// ladybug ???
// invert screen function
function invertPage() {
    document.getElementById('pageContent').style.filter = 'invert(1)';
    document.getElementById('topbar').style.filter = 'invert(1)';
    document.getElementById('izzy').style.filter = 'invert(1)';
    document.getElementById('stars').style.filter = 'invert(1)';
    document.getElementById('nav').style.filter = 'invert(1)';
}

/////////////////////////////////////
// valuable methods
/////////////////////////////////////

// random color function, returns a random hex
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// invert hex function
function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}
/////////////////////////////////////