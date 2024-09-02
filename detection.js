            var detection = document.getElementById('detection');
            if(navigator.userAgent.includes("Chrome")) {
                detection.innerText = "you are using an inferior web browser. disgusting.";
            } else if(navigator.userAgent.includes("Vivaldi")) {
                detection.innerText = "vivaldi? what the hell is a vivaldi?";
            } else if(navigator.userAgent.includes("Safari")){
                detection.innerText = "safari? you scumbag.";
            } else if(navigator.userAgent.includes("AppleWebKit")) {
                detection.innerText = "you're using an apple product? what's wrong with you?";
            } else if(navigator.userAgent.includes("Edge") || navigator.userAgent.includes("Edg")) {
                detection.innerText = "living on the edge, huh? use a better web browser..";
            } else if(navigator.userAgent.includes("Firefox") || navigator.userAgent.includes("Mozilla")) {
                detection.innerText = "thank you for using firefox!";
            } else {    
                detection.innerText = "error detecting web browser...";
            }
            var detection2 = document.getElementById('detection2');
            if(navigator.userAgent.includes("Linux")) {
                detection2.innerText = "thank you for using linux!";
            } else {
                detection2.innerText = "we have detected that you aren't using linux. revolting.";
            }