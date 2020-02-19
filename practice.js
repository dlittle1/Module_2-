// capitalize("hey friends! practice practice practice!")
//capitalize any character that follows a space

// function capitalize(str){
//    strArray = str.split(" ");
//    var newString = ""
//    for (let i = 1; i < strArray.length; i++){
//       for (let j = 0; j < strArray[i].length; j++){
//          if (j === 0){
//             newString.join(strArray[i][j].toUpperCase())
//          }
//       }
//    }
//    console.log(newString);
// }

// function Car(make, model){
//    this.make = make
//    this.model = model
// }

// Car.prototype.honk = function () {
//    console.log('honk');
// };

// jeep.honk();

class Vehicle {
   constructor(make, model){
      this.make = make;
      this.model = model;
   }

   honk(){
      console.log("honk");
   }
}

class Motorcycle extends Vehicle {
   constructor(make, model, hasSideCar){
      super(make, model);
      this.hasSideCar = hasSideCar;
   }
}

const jeep = new Vehicle("jeep", "cherokee")
const mazda = new Vehicle("mazda", "3")
const harley = new Motorcycle("Harley", "davidson", true)

console.log(jeep.make);
jeep.honk();
harley.honk();
