const images = document.querySelectorAll('.art-image');
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
    
    // let isEnlarged = false;
    
    image.addEventListener('click', () => {
    //     if (isEnlarged) {
    //         image.style.width = '500px';
    //     } else {
    //         image.style.width = '1500px';
    //         isEnlarged = true;
    //     }
    //     //isEnlarged = !isEnlarged;
    
        window.open(image.src, '_blank');
    })
    image.addEventListener('mouseout', () => {
        //image.style.width = '500px';
        image.style.transform = 'scale(1)';
        image.style = 'border: 2px solid chartreuse';
    })
})