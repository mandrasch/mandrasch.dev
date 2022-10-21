'use strict';

window.addEventListener("load", function (event) {
    
    let imgPlaceholder = document.getElementById("img-placeholder");
    let btnLoadImg = document.getElementById("btn-load-image");
    if(imgPlaceholder != null){
        btnLoadImg.addEventListener("click",function(){
            imgPlaceholder.style.backgroundImage = 'url("assets/matthias_andrasch_hero_image.jpeg")';
            this.style.display = 'none';
        },false);
    }
});