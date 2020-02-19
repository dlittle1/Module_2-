// function sum(x, y){
//    try {
//       if (typeof x !== "number"){
//          throw new Error(`"${x}" is not a number`)
//       }else if (typeof y !== "number"){
//          throw `"${y}" is not a number`
//       }
//    }
//    catch(err) {
//       console.log(err)
//    }
//    finally {
//       return;
//    }
//   return x + y;
// }
//
// console.log(sum("1", "2"))


var user = {username: "sam", password: "123abc"};

console.log(login("bill", user.password))
function login(username, password){
   const u = "sam"
   const pass = "123abc"
   try{
      if (username !== u){
         throw username
      }else if (password != pass) {
         throw password
      }
   }
   catch(err){
      console.log(`${err} is not correct`)
      return "please enter valid credentials to log in";
   }
   finally {

   }
   return "welcome";
}
