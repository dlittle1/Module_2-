// Fetch
// url: "https://rickandmortyapi.com/api/character"
// defaults to GET
fetch("https://rickandmortyapi.com/api/character", {
   //configuration object
   method: 'post',
   body: JSON.stringify({})

})
   .then(res => res.json())
   .then(res => res.map(resItem => {
      const h1 = document.createElement('h1')
      h1.textContent = res.results[i].name
      document.body.appendChild(h1)
   }))
   .catch(err => console.log(err))
