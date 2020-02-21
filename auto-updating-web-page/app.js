function getData(){
   axios.get("https://api.vschool.io/dylan/todo")
      .then(res => listData(res.data))
      .catch(err => console.log(err))
}

// innerHTML

// lists todo to dom
function listData(data) {
   // document.getElementById('todo-list').innerHTML = ''
   clearList();
   for (var i = 0; i < data.length; i++) {
      const h1 = document.createElement('h1')
      h1.textContent = data[i].title
      document.getElementById('todo-list').appendChild(h1)
   }
}

function clearList(){
   const el = document.getElementById('todo-list')
   while(el.firstChild){
      el.removeChild(el.firstChild)
   }
}

getData()

//form for post requests
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", e => {
   e.preventDefault()

   const newTodo = {
      title: todoForm.title.value
   }

   todoForm.title.value = ""

   axios.post("https://api.vschool.io/dylan/todo", newTodo)
      .then(res => getData())
      .catch(err => console.log(err))
})
