
window.addEventListener("load", function() {
    replaceNavigationContent();
    randomKiwi();
});

function replaceNavigationContent() {
    var navigationDiv = document.getElementById("navigation");

    if (navigationDiv) {
        navigationDiv.innerHTML = `
            <div class="mainbarLeft" style="font-size: 14px; color: chartreuse; font-family: monospace; height:100%">
            
                
                
                <a href="https://insect.christmas/art" target="_parent"><img src="https://insect.christmas/buttons/art.gif" style="padding:0;"></a> 
                
                <a href="https://insect.christmas/comics" target="_parent"><img src="https://insect.christmas/buttons/comic.gif" style="padding:0;"></a>
                
                <a href="https://insect.christmas/cosplay" target="_parent"><img src="https://insect.christmas/buttons/cosplay.gif" style="padding:0;"></a>
                
                <br>
                <a href="https://insect.christmas/forum" target="_parent"><img src="https://insect.christmas/buttons/forum.gif" style="padding:0;"></a>
                <a href="https://insect.christmas/games" target="_parent"><img src="https://insect.christmas/buttons/games.gif" style="padding:0;"></a>
                <a href="https://insect.christmas/music" target="_parent"><img src="https://insect.christmas/buttons/music.gif" style="padding:0;"></a>
                
                <br>
                
                 <a href="https://insect.christmas/thoughts" target="_parent"><img src="https://insect.christmas/buttons/thoughts.gif" style="padding:0;"></a>
                
                <a href="https://insect.christmas/video" target="_parent"><img src="https://insect.christmas/buttons/video.gif" style="padding:0;"></a>
                
                <a href="https://insect.christmas/dir" target="_parent"><img src="https://insect.christmas/buttons/other.gif" style="padding:0;"></a>
                
                
                <hr style="color:chartreuse;">

                <a href="https://aoogle.org" target="_parent"><img src="https://insect.christmas/buttons/aoogle.gif" style="padding:0;"></a>
                <a href="https://insect.christmas/onlyfans" target="_parent"><img src="https://insect.christmas/buttons/lewds.gif" style="padding:0;"></a>
                <a href="https://patreon.com/astridztar" target="_parent"><img src="https://insect.christmas/buttons/patreon.gif" style="padding:0;"></a>
                
                <br>
                
                <a href="https://discord.gg/tV6uBJYqC8" target="_parent"><img src="https://insect.christmas/buttons/discord.gif" style="padding:0;"></a>
                <a href="https://insect.christmas/links" target="_parent"><img src="https://insect.christmas/buttons/links.gif" style="padding:0;"></a>
                <a href="https://lilacboy.store" target="_parent"><img src="https://insect.christmas/buttons/merch.gif" style="padding:0;"></a>
                
                <hr style="color:chartreuse;">
                
                <img class="kiwiPic" id="kiwi" src="" width="200" height="200">
                <br>
                <b id="kiwiText"></b>
                
                
            </div>
        `;
    } else {
        console.error("Element with ID 'navigation' not found.");
    }
}

// kiwi images array
var kiwiImages = ["https://insect.christmas/kiwi/kiwi1.png", "https://insect.christmas/kiwi/kiwi2.png", "https://insect.christmas/kiwi/kiwi3.png", "https://insect.christmas/kiwi/kiwi4.png", "https://insect.christmas/kiwi/kiwi5.png", "https://insect.christmas/kiwi/kiwi6.png", "https://insect.christmas/kiwi/kiwi7.png", "https://insect.christmas/kiwi/kiwi8.png", "https://insect.christmas/kiwi/kiwi9.png", "https://insect.christmas/kiwi/kiwi10.png", "https://insect.christmas/kiwi/kiwi11.png", "https://insect.christmas/kiwi/kiwi12.png", "https://insect.christmas/kiwi/kiwi13.png", "https://insect.christmas/kiwi/kiwi14.png", "https://insect.christmas/kiwi/kiwi15.png", "https://insect.christmas/kiwi/kiwi16.png", "https://insect.christmas/kiwi/kiwi17.png", "https://insect.christmas/kiwi/kiwi18.png", "https://insect.christmas/kiwi/kiwi19.png", "https://insect.christmas/kiwi/kiwi20.png", "https://insect.christmas/kiwi/kiwi21.png", "https://insect.christmas/kiwi/kiwi22.png", "https://insect.christmas/kiwi/kiwi23.png", "https://insect.christmas/kiwi/kiwi24.png", "https://insect.christmas/kiwi/kiwi25.png", "https://insect.christmas/kiwi/kiwi26.png", "https://insect.christmas/kiwi/kiwi27.png", "https://insect.christmas/kiwi/kiwi28.png", "https://insect.christmas/kiwi/kiwi29.png", "https://insect.christmas/kiwi/kiwi30.png", "https://insect.christmas/kiwi/kiwi31.png", "https://insect.christmas/kiwi/kiwi32.png", "https://insect.christmas/kiwi/kiwi33.png", "https://insect.christmas/kiwi/kiwi34.png", "https://insect.christmas/kiwi/kiwi35.png", "https://insect.christmas/kiwi/kiwi36.png", "https://insect.christmas/kiwi/kiwi37.png", "https://insect.christmas/kiwi/kiwi38.png", "https://insect.christmas/kiwi/kiwi39.png", "https://insect.christmas/kiwi/kiwi40.png", "https://insect.christmas/kiwi/kiwi41.png", "https://insect.christmas/kiwi/kiwi42.png", "https://insect.christmas/kiwi/kiwi43.png", "https://insect.christmas/kiwi/kiwi44.png", "https://insect.christmas/kiwi/kiwi45.png", "https://insect.christmas/kiwi/kiwi46.png", "https://insect.christmas/kiwi/kiwi47.png", "https://insect.christmas/kiwi/kiwi48.jpeg", "https://insect.christmas/kiwi/kiwi49.png", "https://insect.christmas/kiwi/kiwi50.png", "https://insect.christmas/kiwi/kiwi51.jpeg"]

var kokoImages = ["https://insect.christmas/kiwi/coco1.png", "https://insect.christmas/kiwi/coco2.png","https://insect.christmas/kiwi/coco3.png","https://insect.christmas/kiwi/coco4.png","https://insect.christmas/kiwi/coco5.png","https://insect.christmas/kiwi/coco6.png","https://insect.christmas/kiwi/coco7.png","https://insect.christmas/kiwi/coco8.png","https://insect.christmas/kiwi/coco9.png","https://insect.christmas/kiwi/coco10.png","https://insect.christmas/kiwi/coco11.png","https://insect.christmas/kiwi/coco12.png","https://insect.christmas/kiwi/coco13.png","https://insect.christmas/kiwi/coco14.png","https://insect.christmas/kiwi/coco15.png","https://insect.christmas/kiwi/coco16.png", "https://insect.christmas/kiwi/koko17.jpeg","https://insect.christmas/kiwi/koko18.png","https://insect.christmas/kiwi/koko19.jpeg"]

function randomKiwi() {
    // decide kiwi or coco
    var kiwiOrKoko = Math.floor(Math.random() * 7);
    if(kiwiOrKoko == 2) {
          // get random number
        var random2 = Math.floor(Math.random() * kokoImages.length);
        var imageGot2 = kokoImages[random2];
        
        // grab image and text via id
        document.getElementById('kiwi').src = imageGot2;
        document.getElementById('kiwiText').innerText = "koko pic #" + String(random2+1); 
    } else {
          // get random number
        var random = Math.floor(Math.random() * kiwiImages.length);
        var imageGot = kiwiImages[random];
        
        // grab image and text via id
        document.getElementById('kiwi').src = imageGot;
        document.getElementById('kiwiText').innerText = "kiwi pic #" + String(random+1); 
    }
}