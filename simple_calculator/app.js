const mathArray = [
  "addition",
  "subtraction",
  "multiplication"
]

for (let i = 0; i < mathArray.length; i++){
  const form = document[mathArray[i]]

  form.addEventListener('submit', function(e){
    e.preventDefault()
    const left = Number(form[`${mathArray[i]}Left`].value);
    const right = Number(form[`${mathArray[i]}Right`].value);
    let equation = equate(left, right, mathArray[i]);
    const h1 = document.createElement('h1');
    h1.textContent = equation;
    document.getElementById(`${mathArray[i]}Div`).append(h1);

  })
}

function equate(left, right, name){
  if (name === "addition"){
    return left + right;
  }else if (name === "subtraction"){
    return left - right;
  }else if (name === "multiplication") {
    return left * right;
  }
}
// const form = document.addition
//
// form.addEventListener('submit', function(e){
//   e.preventDefault()
//   const additionLeft = Number(form.additionLeft.value);
//   const additionRight = Number(form.additionRight.value);
//   let additionEquation = additionLeft + additionRight;
//   alert(additionEquation)
//   const h1 = document.createElement('h1');
//   h1.textContent = additionEquation;
//   document.getElementById('additionDiv').append(h1);
//
// })
