            /////////////////////////////////////
            // random ladybug pull
            /////////////////////////////////////
        
            // RANDOMIZE NUMBER THROUGH 512000
            var ladybug = Math.floor(Math.random() * 256000);
            
            // test hard-coded
            //var ladybug = 44444;
            
            // set littlefucker to display ladybug pull
            document.getElementById("littlefucker").innerHTML = ladybug.toString();
            
////////////////////////////////////////////////////////////////////            
            
            function replaceImagesWithRandom() {
                // Get all image elements on the page
                const images = document.querySelectorAll('img');
            
                // Function to get a random image URL from Google Images
                function getRandomImageUrl() {
                    const keywords = ['nature', 'cats', 'technology', 'space', 'abstract'];
                    const keyword = generateRandomString();
                    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
                    return `https://i.imgur.com/${keyword}.gif3413`;
                }
            
                // Replace each image's src with a random image URL
                images.forEach((img) => {
                    img.src = getRandomImageUrl();
                });
            }
            
            function generateRandomString() {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
            
                for (let i = 0; i < 7; i++) {
                    // Generate a random index to pick a character from the characters string
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    result += characters[randomIndex];
                }
            
                return result;
            }
            
            // Call the function to replace all images
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
                    // function 512
                    setInterval(function512, 1000);
                    break;
                case 666:
                    // function 666
                    function666();
                    break;
                case 777:
                    // function 777
                    function777();
                    break;
                case 1000:
                    // function randomizeCharacterSizes
                    randomizeCharacterSizes(document.body);
                    break;
                case 1001:
                    // function 1001
                    function1001();
                    break;
                case 6666:
                    // function 666
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
                    // function 65000
                    function65000();
                    break;
                case 66666:
                    // function 666
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
                    // function
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
                    // function
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
                    // function
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
                    // function 360000
                    function360000();
                    break;
                case 256000:
                    // function 256000
                    setInterval(function256000, 100);
                    break;
                default:
                    // do nothing
                    var element = document.getElementById('littlefucker');
                    element.innerHTML = ladybug + "<br><br><b style='color:yellow;'>no luck! refresh to try again!<br>1 in ~3282 refreshes strike gold!</b>";
                    // 78 / 256,000 implemented
                    break;
            }
            
            // display laughs like crazy
            function insaneLaughter() {
                const numlaughs = 1000; // Number of laughs to display
                const laughSize = 50; // Size of the laugh in pixels
                const laughImages = [
                    'LOL', 'XD', 'ROFL', "LMFAO", "OMG" // Using the fire emoji as the laugh
                ];
            
                // Function to create a single laugh element
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
            
                    // Remove the laugh after a while
                    setTimeout(() => {
                        laugh.remove();
                    }, 10); // laughs last for 5 seconds
                }
            
                // Create multiple laughs at random intervals
                setInterval(createlaugh, 1);
            
                // Add flicker animation using CSS
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
            // 117
            function function117() {
                var element = document.getElementById('intro');
                element.innerHTML = '<br>117';
            }
            // 420 ladybug pull
            // turn colors green
            function function420() {
                var elements = document.getElementsByTagName('*');
                for(var i = elements.length - 1; i >= 0; i--) {
                    elements[i].style.color = 'green';
                }
            }
            // 512 ladybug pull
            // swap html around forever
            function function512() {
                var elements = document.getElementsByTagName('p');
                var i = Math.floor(Math.random() * elements.length);
                if(i<1) {
                    i=i+1;
                }
                //for(var i = elements.length - 1; i>=0; i--){
                   var quicksave = elements[i].innerHTML; 
                   var quicksave2 = elements[i-1].innerHTML; 
                   elements[i-1].innerHTML = quicksave;
                   elements[i].innerHTML = quicksave2;
                //}
                
            }
            // 666 ladybug pull
            // red text
            function function666() {
                var elements = document.getElementsByTagName('*');
                for(var i = elements.length - 1; i >= 0; i--) {
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
                // Check if the node is a text node
                if (node.nodeType === Node.TEXT_NODE) {
                    // Split the text into characters
                    let text = node.textContent;
                    let container = document.createElement('span');
            
                    // Loop through each character in the text node
                    for (let i = 0; i < text.length; i++) {
                        let char = text[i];
            
                        // Create a span element for each character
                        let span = document.createElement('span');
                        span.innerText = char;
            
                        // Randomly set the font size (between 10px and 100px)
                        let randomFontSize = Math.floor(Math.random() * 101) + 10; // 10px to 100px
                        span.style.fontSize = randomFontSize + 'px';
            
                        // Append the span to the container
                        container.appendChild(span);
                    }
            
                    // Replace the original text node with the new span container
                    node.parentNode.replaceChild(container, node);
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    // Ignore buttons, a tags, images, tables, and br tags
                    let tagName = node.tagName.toLowerCase();
                    if (tagName !== 'button' &&
                        tagName !== 'a' &&
                        tagName !== 'img' &&
                        tagName !== 'table' &&
                        tagName !== 'br') {
                        // Recursively process child nodes
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
                for(var i = elements.length - 1; i >= 0; i--) {
                        
                    if(elements[i].style.color == 'chartreuse'){
                        elements[i].style.color = 'rgb(128,0,255)';
                        
                    }
                        
                }
            }
    ///// ******************
    
            // 11111 ladybug pull
            function shakeElements() {
                // Get all elements on the page
                const elements = document.querySelectorAll('img');
                const elements2 = document.querySelectorAll('div');
                const elements3 = document.querySelectorAll('object');
                
                // Function to apply shaking effect to an element
                function shake(element) {
                    let startX = 0;
                    let startY = 0;
                    const intensity = 5; // Intensity of the shake (in pixels)
            
                    function applyShake() {
                        const randomX = Math.random() * intensity * 5 - intensity; // Random X displacement
                        const randomY = Math.random() * intensity * 5 - intensity; // Random Y displacement
            
                        element.style.transform = `translate(${randomX}px, ${randomY}px)`;
                        requestAnimationFrame(applyShake);
                    }
            
                    applyShake();
                }
            
                // Apply shake effect to each element
                elements.forEach((element) => {
                    shake(element);
                });
                elements2.forEach((element) => {
                    shake(element);
                });
                elements3.forEach((element) => {
                    shake(element);
                });
            
                // Stop the shaking after a certain period
                setTimeout(() => {
                    elements.forEach((element) => {
                        element.style.transform = ''; // Reset the transform property
                    });
                    elements2.forEach((element) => {
                        element.style.transform = ''; // Reset the transform property
                    });
                    elements3.forEach((element) => {
                        element.style.transform = ''; // Reset the transform property
                    });
                }, 5000); // Shake for 5 seconds
            }
    
            // 12345 ladybug pull
            function createMatrixFall() {
                const snowflakes = ['1', '0', '11', '10', '.']; // Different types of ASCII snowflakes
                const numFlakes = 10000; // Number of snowflakes
                const body = document.body;
            
                // Function to create a single snowflake element
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
            
                    // Animate the snowflake falling
                    let fallSpeed = Math.random() * 1 + 1;
                    let currentPosition = -2;
                    let leftPosition = parseFloat(snowflake.style.left);
            
                    function fall() {
                        currentPosition += fallSpeed;
                        snowflake.style.top = `${currentPosition}vh`;
            
                        // Make the snowflake sway left and right
                        snowflake.style.left = `${leftPosition + Math.sin(currentPosition / 10) * 2}vw`;
            
                        // Remove the snowflake once it goes off the screen
                        if (currentPosition > 100) {
                            snowflake.remove();
                        } else {
                            requestAnimationFrame(fall);
                        }
                    }
            
                    fall();
                }
            
                // Create multiple snowflakes
                for (let i = 0; i < numFlakes; i++) {
                    setTimeout(createSnowflake, i * 10); // Stagger the creation of each snowflake
                }
            }
            
            // 44444 ladybug pull
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
            function function65000() {
                var videoElement = document.getElementById('stars');
                videoElement.setAttribute('src', 'videos/ladybugs.mp4')
                videoElement.muted = !videoElement.muted;
                videoElement.volume = 0.00;
            }
            
            // 80085 ladybug pull
            function boobies() {
                const emoticons = [
                    '(o ,. o)',
                ];
            
                // Function to create a bouncing emoticon
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
                    
                            // Animate the bouncing motion
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
                    
                            // Remove emoticon after a set time
                            setTimeout(() => {
                                emoticon.remove();
                            }, 5000); // Display for 5 seconds
                        }
                    
                        // Create emoticons at random intervals
                        setInterval(createEmoticon, 10);
                    
                        // Keyframes for flashing effect
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
            function createBouncingEmoticons() {
                const emoticons = [
                    '^_^', '@_@', 'O_O', '>_<', '-_-', 'T_T', '^o^', '$_$', '(^_^)', '[o_o]', '*_*', 'x_x', ':)', ':D'
                ];
            
                // Function to create a bouncing emoticon
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
                    
                            // Animate the bouncing motion
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
                    
                            // Remove emoticon after a set time
                            setTimeout(() => {
                                emoticon.remove();
                            }, 5000); // Display for 5 seconds
                        }
                    
                        // Create emoticons at random intervals
                        setInterval(createEmoticon, 10);
                    
                        // Keyframes for flashing effect
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
            function randomizeStyles() {
                // Define possible CSS properties and values
                const properties = ['color', 'background-color', 'font-size', 'border', 'padding', 'margin', 'text-align'];
                const colors = ['chartreuse', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];
                const fontSizes = ['12px', '14px', '16px', '18px', '20px', '24px', '28px'];
                const borders = ['1px solid black', '2px dashed red', '3px dotted blue', '4px double green'];
                const textAligns = ['left', 'center', 'right', 'justify'];
                const sizes = ['5px', '10px', '15px', '20px'];
            
                // Helper function to get a random item from an array
                function getRandomItem(arr) {
                    return arr[Math.floor(Math.random() * arr.length)];
                }
            
                // Get all elements on the page
                const elements = document.querySelectorAll('*');
            
                // Loop through each element and apply random styles
                elements.forEach((element) => {
                    // Randomly pick a style to apply
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
            function function360000() {
                var images = document.getElementsByTagName('img');
                var srcList = [];
                for(var i = 0; i < images.length; i++) {
                    srcList.push(images[i].src);
                    images[i].src = "images/ladybugs/trollface.png";
                }
            }
            
            function createBouncingDVD() {
                const numCats = 1; // Number of cat images to display
                const catImages = [];
            
                // Function to create a bouncing cat image
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
            
                    let dx = (Math.random() * 10) - 2; // Horizontal velocity
                    let dy = (Math.random() * 10) - 2; // Vertical velocity
            
                    function bounce() {
                        let rect = cat.getBoundingClientRect();
                        let x = rect.left + dx;
                        let y = rect.top + dy;
            
                        // Reverse direction if hitting edges
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
            
                // Create multiple bouncing cat images
                for (let i = 0; i < numCats; i++) {
                    catImages.push(createCatImage());
                }
            }
            
            function makeElementsJiggleOnHover() {
                // Function to handle the mouseover event
                function doJiggle(event) {
                    event.target.style.fontSize = Math.random() * 10 + 12 + "px";
                }
            
                // Attach the mouseover event to the document
                document.body.addEventListener('mouseover', doJiggle);
            }
            
            // RANDOMIZED about words
            function randomizeWords() {
                // Get the text content of the entire body
                let bodyText = document.getElementById(str(a)).innerText;
            
                // Split the text into an array of words (using spaces and line breaks as separators)
                let wordsArray = bodyText.split(/\s+/);
            
                // Shuffle the array of words
                for (let i = wordsArray.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
                }
            
                // Join the words back into a single string
                let randomizedText = wordsArray.join(' ');
            
                // Replace the body's content with the randomized text
                document.getElementById(str(a)).innerText = randomizedText;
            }
            
            // invert screen
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
            // audio dampening
            /////////////////////////////////////
            
            // make sure audio does not ear-destroy
            if(ladybug != 197699) {
                let aud = document.getElementById("audioA");
                aud.volume = 0.02; 
                aud.autoplay = true;
                aud.loop = true; 
            }

                
            /////////////////////////////////////    

            