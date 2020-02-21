function getData(){
   axios.get("https://api.vschool.io/dylan/todo")
      .then(res => updateListView(res.data))
      .catch(err => console.log(err))
}

function updateListView(todoList){
   clearList()
   for (var i = 0; i < todoList.length; i++) {
      let item = todoList[i]
      createDomElements(item, i)
   }
}

getData()

function createDomElements(item, id){
   //create h1
   let h1 = document.createElement('h1')
   h1.textContent = item.title
   //check if item completed -> strikethrough
   if(item.completed){
      h1.style = "text-decoration: line-through"
   } else {
      h1.style = "text-decoration: none"
   }
   //createh2
   let h2 = document.createElement('h2')
   h2.textContent = item.description
   //get todo-list
   let elem = document.getElementById('todo-list')
   //create div for elements
   let divElem = document.createElement('div')
   divElem.id = "todoDiv" + id
   //append h elements to div
   divElem.appendChild(h1)
   divElem.appendChild(h2)
   //create image
   if (item.imgUrl){
      let imageElem = document.createElement('img')
      imageElem.src = item.imgUrl
      divElem.appendChild(imageElem)
   }
   //create delete button
   let deleteButton = document.createElement('button')
   deleteButton.id = "deleteButton" + id
   deleteButton.textContent = "DELETE"
   //append delete button to div
   divElem.appendChild(deleteButton)
   deleteButton.addEventListener("click", () => deleteTodo(item))
   //create checkbox for updates
   let checkCompleteBox = document.createElement('input')
   checkCompleteBox.type = "checkbox"
   checkCompleteBox.name = "checkbox"
   checkCompleteBox.addEventListener('change', () => updateTodo(item))
   divElem.appendChild(checkCompleteBox)
   //append div to todo-list
   elem.appendChild(divElem)
}

function clearList(){
   const el = document.getElementById('todo-list')
   while(el.firstChild){
      el.removeChild(el.firstChild)
   }
}

const todoForm = document["todo-form"]
todoForm.addEventListener("submit", e => {
   e.preventDefault()
   addTodo()

})

function addTodo(){
   const newTodo = {
      title: todoForm.title.value,
      description: todoForm.description.value,
      imgUrl: todoForm.imgUrl.value
   }
   axios.post("https://api.vschool.io/dylan/todo", newTodo)
      .then(res => getData())
      .catch(err => console.log(err))
}

function updateTodo(item){
   let update;
   if (item.completed === false){
      update = {
         completed: "true"
      }
   } else {
      update = {
         completed: "false"
      }
   }
   console.log(item)
   axios.put(`https://api.vschool.io/dylan/todo/${item._id}`, update)
      .then(res => getData())
      .catch(err => console.log(err))
}

function deleteTodo(item){
   axios.delete(`https://api.vschool.io/dylan/todo/${item._id}`)
      .then(res => getData())
      .catch(err => console.log(err))
}
