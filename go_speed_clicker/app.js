let button = document.getElementById('clicker');
let counter = 0 || localStorage.getItem("counter");
button.addEventListener("click", function(){
   counter++;
   localStorage.setItem("counter", counter)
   let storedCounter = localStorage.getItem("counter")
   const elem = document.getElementById('buttonClicked')
   elem.textContent = `you've clicked the button ${storedCounter} times`;
})
