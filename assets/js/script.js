function init() {
   console.log("init")
   let squares = document.getElementsByClassName("square");
   
   for (let square of squares) { 
      square.addEventListener("mousedown", (e) => {
         console.log("addEventListenere mousedown " + e.target.id);
         squareClicked(e);
      })
   }
}

function squareClicked(e) {
   if (e.target.id === moleLocation) {
      result++;
      score.innerHTML = result;
      moleLocation = null;
      
   }
}

let score = document.getElementById("score");
let result = 0;
let timer = null;
let moleLocation = null;


/**
 * onclick easy-game button, start easy game with interval 1s
 * and start the timeleft count down
 */
function startEasy() {   
   timer = setInterval(randomSquare, 1000);
   countDownSeconds();
}

/**
 * onclick hard-game button, start hard game with interval 0.7s
 * and start the timeleft count down
 */
function startHard() {
   timer = setInterval(randomSquare, 600);
   countDownSeconds();
}

// show game instruction
function togglePopup() {
   document.getElementById("popup-1").classList.toggle("active");
}

/**
 * when starting the game the the clock countdown starts from 60
 * time value reduce by 1 at an interval of 1s
 * 
 * */
function countDownSeconds() {

   time = document.getElementById("timeleft");
   countDownTimer = setInterval(function() {  
   newTime = time.innerHTML;
   newTime--;
   time.innerHTML = newTime;
   
   if (newTime === -1) {
      clearTimeout(countDownTimer);
      clearTimeout(timer)
      time.innerHTML = 10;
      score.innerHTML = 0;
      result = 0;
      alert("GAME OVER!");
      }
   }, 1000);

}

/**
 * remove "old" mole before randomly placing a "new"
 * generate random integer between 0-8 and place mole
 * check mouse down location if position == moleLocation if it does
 * increase score by one
 */
function randomSquare() {

   let squares = document.getElementsByClassName("square");
   
   for (let square of squares) { 
   square.classList.remove("mole");
   }

   let randomSquare = squares[Math.floor(Math.random() * 9)]; 
   randomSquare.classList.add("mole");

   moleLocation = randomSquare.id;

   /**
    * document.addEventListener("mousedown", (e) => {
      console.log("addEventListenere mousedown " + e.target.id)
      if (e.target.id === moleLocation) {
         result++;
         score.innerHTML = result;
         moleLocation = null;
         e.target.id =null;
         //console.log(e.target.id)
      }
   })
    */
    


}
