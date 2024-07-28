
            /////////////////////////////////////
            // random ladybug pull
            /////////////////////////////////////
        
            // RANDOMIZE NUMBER THROUGH 512000
            var ladybug = Math.floor(Math.random() * 512000);
            
            // test hard-coded
            //var ladybug = 1001;
            
            // set littlefucker to display ladybug pull
            document.getElementById("littlefucker").innerHTML = ladybug.toString();
            
            // operate ladybug pull
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
                case 1001:
                    // function 1001
                    function1001();
                    break;
                case 6666:
                    // function 666
                    function666();
                    break;
                case 66666:
                    // function 666
                    function666();
                    break;
                case 197699:
                    // function 197699 september 9th 1976
                    function197699();
                    break;
                case 256000:
                    // function 256000
                    setInterval(function256000, 100);
                    break;
                default:
                    // do nothing
                    break;
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
            
            /////////////////////////////////////
            // animated squid
            /////////////////////////////////////
            var squidOpen = "C:=";
            var squidClosed = ". C:E"
            
            // slow alarm
            setInterval(squidTimer, 1000);
            function squidTimer() {
                
                // animated squids
                var squids = document.getElementById('squid');

                if(squids.innerText === squidOpen) {
                    squids.innerText = squidClosed;
                } else {
                    squids.innerText = squidOpen;
                }

                
                // i.c. random color
                var ic = document.getElementById('rainbow');
                ic.style.color = getRandomColor();
                
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
            
            // make sure audio does not earrape
            if(ladybug != 197699) {
                           let aud = document.getElementById("audioA");
                aud.volume = 0.1; 
                aud.autoplay = true;
                aud.loop = true; 
            }

                
            /////////////////////////////////////    
