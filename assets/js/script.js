let score = document.getElementById("score");
let squares = document.getElementsByClassName("square");
let result = 0;
let timer = null;
let randomMoleLocation;

// show game instruction
function togglePopup() {
   document.getElementById("popup-1").classList.toggle("active");
}

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
 */
function randomSquare() {
   
   for (let square of squares) { 
   square.classList.remove("mole");
   }

   let randomMoleLocation = squares[Math.floor(Math.random() * 9)]; 
   randomMoleLocation.classList.add("mole");

   console.log(randomMoleLocation)

}


/**
 * for (let i=0; i<squares.length; i++) {
   squares[i].addEventListener("mousedown", function() {
      if (squares[i].id == moleLocation) {
         result++;
         score.innerHTML = result;
         moleLocation = null;
         console.log(result)
      }   
   })
}
 */

