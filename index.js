//alert("hello");
//document.querySelector(".w").addEventListener("click", clickMe);
//document.querySelector(".a").addEventListener("click", clickMe);
//document.querySelector(".s").addEventListener("click", clickMe);
//document.querySelector(".d").addEventListener("click", clickMe);
//document.querySelector(".j").addEventListener("click", clickMe);
//document.querySelector(".k").addEventListener("click", clickMe);
//document.querySelector(".l").addEventListener("click", clickMe);

//NOT THAT I AM WRONG BUT THE BOTTOM WAY IS SHORTER USING FOR LOOP


//detect button press
var drumClassLength = document.querySelectorAll(".drum").length
for(var x = 0; x < drumClassLength; x++){document.querySelectorAll(".drum")[x].addEventListener("click", clickMe)

}

function clickMe(){
  var buttoncall = this.innerHTML;
makeSound(buttoncall);  
buttonAmine(buttoncall)
}



var words = ["dynamic", "cool", "awesome", "amazing", "lovely", "splendid"];

   let index = 0;

   function changeText(){
      var changingPart = document.getElementById("us");

      changingPart.textContent = words[index];
      index = (index + 1) % words.length;
   }

   setInterval(changeText, 3000);


   //detect keyboard presss
   document.addEventListener("keydown", function(event){
      makeSound(event.key)
      buttonAmine(event.key)
   })

   buttonAmine()
function makeSound(key){
      switch (key) {
            case "f":
               var audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
               break;
      
               case "a":
               var audio = new Audio("./sounds/tom-2.mp3");
         audio.play();
               break;
      
               case "s":
               var audio = new Audio("./sounds/tom-3.mp3");
         audio.play();
               break;
      
               case "d":
               var audio = new Audio("./sounds/tom-4.mp3");
         audio.play();
               break;
      
               case "j":
               var audio = new Audio("./sounds/snare.mp3");
         audio.play();
               break;
      
               case "k":
               var audio = new Audio("./sounds/crash.mp3");
         audio.play();
               break;
      
               case "l":
               var audio = new Audio("./sounds/kick-bass.mp3");
         audio.play();
               break;
         
            default: console.log(buttoncall)
               break;
         }
}



function buttonAmine(currentKey){
var activeButton = document.querySelector("." + currentKey)

activeButton.classList.add("pressed");
setTimeout(function(){
      activeButton.classList.remove("pressed")
}, 100);
}