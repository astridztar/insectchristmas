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

                if(squids.innerText === squidOpen){
                    squids.innerText = squidClosed;
                } else {
                    squids.innerText = squidOpen;
                }
                
            }
            
            /////////////////////////////////////
            // valuable methods
            /////////////////////////////////////
            
            // invert hex function
            function invertHex(hex) {
                return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
            }
            /////////////////////////////////////