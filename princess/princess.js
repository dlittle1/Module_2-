class Player {
   constructor(name = "", totalCoins = 0, status = "Small", hasStar = false, gameActive = true){
      this.name = name;
      this.totalCoins = totalCoins;
      this.status = status;
      this.hasStar = hasStar;
      this.gameActive = gameActive;
      this.statusOptions = ["Dead", "Small", "Big", "Powered Up", "Star"];
   }

   // Sets name to Mario or Luigi, parameter namePicked -> Mario, Luigi
   setName(namePicked){
      this.name = namePicked;
   }

   //set status accordingly. powered up -> big -> small -> dead
   gotHit(){
      let s = this.status;
      let options = this.statusOptions;

      s = options[options.indexOf(s) - 1]
      if (s === "Dead"){
         this.gameActive = false;
      }
      this.status = s;
   }
   //set status accordingly. small -> big -> powered up -> star
   gotPoweredUp(){
      let s = this.status;
      let options = this.statusOptions;
      s === "Star" ? s = "Star"
      : s = options[options.indexOf(s) + 1]
      this.status = s;
   }

   // adds coin to total coins
   addCoin(){
      this.totalCoins++;
   }

   // prints to the console the name, totalCoins, status, and star properties
   print(){

   }
}

// 0-3
// Math.floor(Math.random() * 4);

// setInterval(function(){ alert("Hello"); }, 3000);

var player = new Player();
player.setName("Mario");

// player.gotHit();

// console.log(player.name)
// console.log(player.status)
// console.log(player.gameActive)

let myInterval;
myInterval = setInterval(runGame, 1000);



function runGame() {
   let randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 0) {
      player.gotHit();
   } else if (randomNumber === 1){
      player.gotPoweredUp();
   } else {
      player.addCoin();
   }
   console.log("randomNumber: " + randomNumber);
   console.log(player);
   if (!player.gameActive){
      stopGame();
   }
}

function stopGame(){
   clearInterval(myInterval);
}
