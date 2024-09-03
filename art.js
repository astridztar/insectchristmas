const images = document.querySelectorAll('.zoom');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        var rotation = Math.floor(Math.random() * 4)
        image.style = 'border: 2px solid slateblue';
        switch(rotation) {
            case 1:
                image.style.transform = 'rotate(2deg)';
                break;
            case 2:
                image.style.transform = 'rotate(-2deg)';
                break;
            case 3:
                image.style.transform = 'rotate(1deg)';
                break;
            case 4:
                image.style.transform = 'rotate(-1deg)';
                break;
            default:
                break;
        }
        
    })
    //image.addEventListener('click', () => {
    //    image.style.width = '1000px';
    //})
    image.addEventListener('mouseout', () => {
        //image.style.width = '500px';
        image.style.transform = 'scale(1)';
        image.style = 'border: 2px solid chartreuse';
    })
})

let aud = document.getElementById("audioA");
    aud.volume = 0.10; 
    aud.autoplay = true;
    aud.loop = true;