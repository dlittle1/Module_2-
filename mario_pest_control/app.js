const form = document.enemiesCost

form.addEventListener("submit", e => {
   e.preventDefault();

   let goombas = (Number(form.goombaCount.value) * 5);
   let bobomb = (Number(form.bobombsCount.value) * 7);
   let cheepCheep = (Number(form.cheepCheepCount.value) * 11);

   const total = goombas + bobomb + cheepCheep;
   let enemiesUl = document.getElementById('enemies')

   const h1 = document.createElement('h1');
   h1.textContent = "Your total is: " + total + " coins!";
   enemies.append(h1);
})
