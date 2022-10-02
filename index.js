let btn1Length = document.querySelectorAll(".drum").length;

for (i = 0; i < btn1Length; i++) {
  let btn1 = document.querySelectorAll(".drum");
  btn1[i].addEventListener("click", function () {
    let SoundBtn = this.innerHTML;
    makeSound(SoundBtn)
    animateButton(SoundBtn)
    
  });
}

document.addEventListener("keydown", function (event) {
  let keyEvent = event.key; 
  makeSound(keyEvent)
  animateButton(keyEvent)
  
});



function makeSound(letter){
    switch (letter) {
      case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        break;
    }

}

function animateButton(pressedkey){
  let activeKey = document.querySelector(`.${pressedkey}`)
  activeKey.classList.add("pressed")

  setTimeout(function(){activeKey.classList.remove("pressed")},200)
}
