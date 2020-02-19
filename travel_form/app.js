
const form = document["travel-form"]

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const firstName = form.firstName.value
  const lastName = form.lastName.value
  const age = form.age.value
  const gender = form.gender.value
  // Dietary Needs
  const checkedInputs = []
  for (let i = 0; i < form["dietary-needs"].length; i++){
    if (form["dietary-needs"][i].checked){
      checkedInputs.push(form["dietary-needs"][i].value)
    }
  }
 const destination = form.destination.value;
 alert(`   First Name: ${firstName}
   Last Name: ${lastName}
   Age: ${age}
   Gender: ${gender}
   Location: ${destination}
   Dietary restrictions: ${checkedInputs.join(", ")}`);
})
