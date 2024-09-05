// personal dictionary of websites i approve of with hand-written tags and descriptions
const dict = 
{url: "https://aoogle.org", tags: "tagExample", description: "description"}];

// easy list of urls
let urls = dict.map(({url})=>url);
console.log(String(urls.length));

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
        
        // get descriptions as well, separated by spaces
        const descriptionArray = item.description.split(' ');
        
        // further split by spaces in each tag so that tags are easier
        // to manually add up above
        const tagsArrayFurtherSplit = [];
        for(var i in tagsArray) {
            if(tagsArray[i].indexOf(' ') >= 0) {
                const tempArray = tagsArray[i].split(' ');
                for(var j in tempArray) {
                    tagsArrayFurtherSplit.push(tempArray[j]);
                }
            }
        }
        
        // convert to lowerase & see if seach query matches a tag
        if(tagsArray.includes(String(input).toLowerCase()) || descriptionArray.includes(String(input).toLowerCase()) || tagsArrayFurtherSplit.includes(String(input).toLowerCase())) {
            // write out html on page in aoogle p tag
            aoogle.innerHTML += "<br><a style=\"margin:0;text-decoration:none;display:inline-block;padding:0;\" href=\"" + String(item.url) + "\">" + String(counter) + ". " + String(item.url) + "</a><br><b style=\"font-size:18px;margin:0px\">" + String(item.description) + "</b><br><p style=\"margin:0;font-size:12px;\"><b>top 5 tags:</b> " + String(tagsArray[0]) + ", " + String(tagsArray[1]) + ", " + String(tagsArray[2]) + ", " + String(tagsArray[3]) + ", " + String(tagsArray[5]) + "</p> <table style=\"margin:0;padding:0;align-items:center;width:100%;justify-content:center;border-collapse:collapse;\"><tr style=\"height:2px;background-color:blue;\"><th></th></tr></table>";
            // increment counter for list
            counter++;
        }
    });
}
// helper function to get number of urls
function getUrlCount() {
    return String(urls.length);
}

/////////
// grab catalog and run url count on it
var catalog = document.getElementById("catalog");
catalog.innerText = "# of pages catalogued: " + getUrlCount();
