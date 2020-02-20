// Get requests with axios
// url: https://api.vschool.io/dylan/todo

// Get all
// axios.get("https://api.vschool.io/dylan/todo")
//    .then(response => {
//       for (let i = 0; i < response.data.length; i++){
//          const h1 = document.createElement('h1')
//          h1.textContent = response.data[i].title
//          document.body.appendChild(h1)
//       }
//    })
//    .catch(err => console.log(err))
//
//
// // Get One
// axios.get("https://api.vschool.io/dylan/todo/5e4d9a9cf468d266b6c88bc2")
//    .then(response => console.log(response.data))
//    .catch(err => console.log(err))


// Post request
// Request body

// const todoForm = document.todoform
//
// todoForm.addEventListener("submit", e => {
//    e.preventDefault();
//    const newTodo = {
//       title: todoForm.title.value,
//       description: todoForm.description.value,
//       imgUrl: todoForm.imgUrl.value
//    }
//    axios.post("https://api.vschool.io/dylan/todo", newTodo)
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err))
// })

// DELETE request

// axios.delete("https://api.vschool.io/dylan/todo/5e4d9a9cf468d266b6c88bc2")
//    .then(res => console.log(res))
//    .catch(err => console.log(err))
//

// PUT request
// axios.get("https://api.vschool.io/dylan/todo")
//    .then(res => console.log(res))
//    .catch(err => console.log(err))
//
const updates = {
   title: "another title",
   description: "updated my description",
   imgUrl: "none"
}
//
axios.put("https://api.vschool.io/dylan/todo/5e4d9f4ff468d266b6c88bc4", updates)
   .then(res => console.log(res))
   .catch(err => console.log(err))

const person = {
   name: "Steve",
   age: 20
}

// const updates = {
//    name: "dan"
// }
//
// const result = Object.assign(person, updates)
//
// console.log(result)
