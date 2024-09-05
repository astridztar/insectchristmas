// personal dictionary of websites i approve of with hand-written tags and descriptions
const dict = [{url: "https://insect.christmas", tags: "insect,christmas,art,computers,leftist,insectchristmas,insect.christmas,insect christmas,astrid,ztar,astridztar,astrid ztar,music,lilac boy,lilacboy,hyperdimensional,aztro,aztrosist,bug,izzy", description: "astrid ztar's website for all of her art & things"},
{url: "https://insectchristmas.etsy.com", tags: "astrid,ztar,etsy,art,etsy store,etsy shop,insectchristmas,insect,christmas,astridztar,astrid ztar", description: "astrid ztar's shop for original art"},
{url: "https://insect.christmas/aoogle", tags: "aoogle,search engine", description: "the aoogle search engine"},
{url: "https://open.spotify.com/artist/4YmUndkdlIma2wzaWmRCWC", tags: "lilac boy,lilacboy,lilac,spotify,music,songs", description: "stream lilac boy's music on spotify"},
{url: "https://www.marxists.org/", tags: "marx,marxism,leftism, leftist, politics,leftist,karl,communism,communist,socialism,socialist", description: "a good archival resource for leftist text"},
{url: "http://www.iikorni.space/", tags: "iko,iko space,iikorni space,iikorni,iikorni.space,tech,technology,blog,computers,mainframe,mainframes,tech blog,technology blog,techblog", description: "iikorni's website"},
{url: "https://xylofool.neocities.org/", tags: "xylo,xylofool,neocities,art", description: "xylofool's website"},
{url: "https://github.com", tags: "github,open source,oss,opensource,code,coding,programming,git,hub,git hub,programs", description: "github"
},
{url: "https://wikipedia.org", tags: "wikipedia,wiki,pedia,wiki pedia", description: "learn lots of shit on wikipedia"},
{url: "https://w3schools.com", tags: "w3,w3schools,w3schools.com,w3 schools,code,coding,program,programming,programmer,how to code,code tutorial,coding tutorial,html,css,javascript,sql,python,java,php,c,c++,c#,bootstrap,react", description: "great resource for learning how to code"},
{url: "https://www.speedrun.com/", tags: "speedrun,speedruns,speedrunning,gamer,gaming,videogame,videogames,video games,video game,speed run,speed runs,summoningsalt", description: "great speedrunning community for most games"},
{url: "https://www.debian.org/", tags: "linux,debian", description: "official debian (gnu/linux) website"},
{url: "https://www.linuxfoundation.org/", tags: "linux,linuxfoundation,linux foundation,foundation,linus,torvalds,linustorvalds,linus torvalds", description: "the linux foundation non-profit website"},
{url: "https://kernel.org", tags: "linux,kernel,kernel.org", description: "linux kernel organization website"},
{url: "https://open.spotify.com/artist/0Sz1krj2D5y5upaR2d0kbR", tags: "alex unknown,alexunknown,spotify,music,mikasacus", description: "stream alex unknown's music on spotify"},
{url: "https://song-rank.com", tags: "song rank,rank,ranking,songrank,song,song-rank,song-rank.com,spacelampsix,spacelamp,spacelamp six,spacelamp6,space,lamp", description: "rank your favorite artist's tracks, eps & albums"},
{url: "https://hilbo.zone", tags: "hilbo,zone,hbag,hbaggg", description: "hilbo.zone"}];

// easy list of urls
let urls = dict.map(({url})=>url);

//document.getElementById("lucky").addEventListener("click", lucky);
document.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        search();
    }
});

// load random web page from dict
function lucky(){
    var randomPage = Math.floor(Math.random() * urls.length);
    window.open(urls[randomPage],"_self");
}

// search for web pages based on search bar
function search() {
    // define aoogle
    var aoogle = document.getElementById("testp");
    // empty aoogle
    aoogle.innerHTML = "";
    var input = document.getElementById("searchBar").value;
    
    // counter for list
    var counter = 1;
    // loop through each item in dict
    dict.forEach(item => {
        // split by commas to go through each tag
        const tagsArray = item.tags.split(',');
        // convert to lowerase & see if seach query matches a tag
        if(tagsArray.includes(String(input).toLowerCase())) {
            // write out html on page in aoogle p tag
            aoogle.innerHTML += "<br><a href=\"" + String(item.url) + "\">" + String(counter) + ". " + String(item.url) + "</a><br><b style=\"font-size:14px;margin:0px\">" + String(item.description) + "</b>";
            // increment counter for list
            counter++;
        }
    });
}