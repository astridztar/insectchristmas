window.onload = function() {
    replaceNavigationContent();
};

function replaceNavigationContent() {
    var navigationDiv = document.getElementById("navigation");

    if (navigationDiv) {
        navigationDiv.innerHTML = `
            <div class="mainbarLeft" style="font-size: 12px; color: chartreuse; font-family: monospace; height:100%">
                <img src="images/pumpkin.gif" style="margin:0;">
                <br>
                <b style="color: slateblue">\\\ &#666;&iuml;&#606; main ///</b><br>
                <b><a href="https://insect.christmas/art" target="_parent">[/art]</a></b>, 
                <b><a href="https://insect.christmas/games" target="_parent">[/games]</a></b><br>
                <b><a href="https://insect.christmas/music" target="_parent">[/music]</a></b>, 
                <b><a href="https://insect.christmas/video" target="_parent">[/video]</a></b><br>
                <b><a href="https://insect.christmas/writing" target="_parent">[/writing]</a></b><br>
                <br>
                <b style="color: slateblue">\\\ &#666;&iuml;&#606; other ///</b><br>
                <b><a href="https://insect.christmas/thoughts" target="_parent">[/thoughts]</a></b>,<br>
                <b><a href="https://insect.christmas/other" target="_parent">[/other]</a></b><br>
                <br>
                <b style="color: slateblue">\\\ &#666;&iuml;&#606; links ///</b><br>
                <b><a href="https://insect.christmas/external" target="_parent">[/external]</a></b><br>
                <br>
                <b style="color: slateblue">\\\ &#666;&iuml;&#606; social ///</b><br>
                <b><a href="https://insect.christmas/forum" target="_parent">[/forum]</a></b>, 
                <b><a href="https://discord.gg/tV6uBJYqC8" target="_blank">[discord]</a></b><br>
                    <br>
                <b style="color: slateblue">\\\ &#666;&iuml;&#606; stores ///</b><br>
                <b><a href="https://lilacboy.store" target="_blank">[merch]</a></b>, 
                <b><a href="https://insectchristmas.etsy.com" target="_blank">[etsy]</a></b>,
                <b><a href="https://artpal.com/astridztar" target="_blank">[art prints]</a></b><br>
                <img src="images/pumpkin.gif" style="margin:0;">
            </div>
        `;
    } else {
        console.error("Element with ID 'navigation' not found.");
    }
}