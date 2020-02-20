// resolve - then
// reject - catch

// thenable

// function flipCoin(){
//    // returns pending
//    return new Promise((resolve, reject) => {
//       const randomNum = Math.floor(Math.random() * 2)
//
//       if (randomNum === 0){
//          resolve("HEADS")
//       } else if (randomNum === 1){
//          reject("TAILS")
//       }
//    })
// }
//
// flipCoin()
//    .then(response => console.log(response))
//    .catch(error => console.log(error))


function getData(){
   return new Promise(resolve => {
      setTimeout(resolve, 2000)
   })
}

getData()
   .then(res => console.log("RESOLVED"))
   .catch(err => console.log(err))
