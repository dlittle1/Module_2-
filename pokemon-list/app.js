const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send()

xhr.onreadystatechange = (() => {
   if (xhr.readyState === 4 && xhr.status === 200){
      const JSONdata = xhr.responseText
      const data = JSON.parse(JSONdata)
      const pokeArr = data.objects[0].pokemon
      console.log(data.objects[0])
      displayPokemon(pokeArr);
   } else {
      console.log("something went wrong")
   }
})

displayPokemon = (pokemon) => {
   pokemon.sort((a, b) => (a.name > b.name) ? 1 : -1 )
   pokemon.map(pokemon => {
   const h3 = document.createElement("h3");
   h3.innerHTML = pokemon.name;
   document.body.appendChild(h3);
   })
}
