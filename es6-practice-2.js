const collectAnimals = (...animals) => animals

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation));

function returnFirst(items){
    const [firstItem] = items
    return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))

function combineAnimals(...args) {
   let newAnimals = []
   for (arg of args){
      newAnimals.push(...arg)
   }
   return newAnimals
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(product(1,2,3,4,5));

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
