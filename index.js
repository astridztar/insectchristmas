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
            
            // make sure audio does not ear-destroy
            if(ladybug != 197699) {
                let aud = document.getElementById("audioA");
                aud.volume = 0.02; 
                aud.autoplay = true;
                aud.loop = true; 
            }

                
            /////////////////////////////////////    
