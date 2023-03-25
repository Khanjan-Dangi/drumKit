var cnt = 0;
var total = document.querySelectorAll("button.drum").length;
while(cnt<total){
    document.querySelectorAll("button")[cnt].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;

        playsound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
    cnt++;
}

document.addEventListener("keydown",function(event){
    playsound(event.key);  
    animation(event.key); 
})


function playsound(toBeChecked){


    switch(toBeChecked){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}


function animation(currentKey){
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");  

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}