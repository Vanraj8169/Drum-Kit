// Detecting Button Press
var numberofDrumbuttons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberofDrumbuttons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){

   var buttonInnerHTML = this.innerHTML;
   KeyPress(buttonInnerHTML);
   ButtonPress(buttonInnerHTML);
});
}


// Detecting Keyboard Press
document.addEventListener("keydown",function(event){
    KeyPress(event.key);
    ButtonPress(event.key);
});


function KeyPress(character){
    switch (character){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    break;
    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    break;

    default: console.log(buttonInnerHTML);
   }
}

function ButtonPress(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed"); //this add animation to the button 

    setTimeout(function(){
        activeButton.classList.remove("pressed");  // This is used to remove the animation after 100 seconds
    },100);
}
