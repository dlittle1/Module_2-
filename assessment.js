var input = "bookkeeper larry";

var newInput = input.split("").map((item, i) => item === input[i - 1] ? "" : item).join("")

console.log(newInput)
