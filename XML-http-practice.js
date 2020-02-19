// XMLHttpRequest

// how do we create a request (xhr)
// what parts of this object are important for our request


//xhr.onreadystatechange
//xhr.readyState
//xhr.status
//xhr.responseText


// xhr.open()
// xhr.send()

const xhr = XMLHttpRequest()

//three arguments // method . // url // async?
xhr.open("GET", "https://swapi.co/api/people/1", true)
xhr.send()

xhr.onreadystatechange = () => {
   // 4 - has arrived, 200 - completed
   if(xhr.readyState === 4 && xhr.status === 200){
      // response
      const JSONdata = xhr.responseText
      const data = JSONdata.pars(JSONdata)
      console.log(data)
   } else if (xhr.readyState === 4 && xhr.status !== 200){
      console.log(xhr.responseText)
   }
}
// xhr.readyState
   // 1 - reqest has been sent
   // 2
   // 3
   // 4 - arrived

// xhr.status
   // 200 - went well, data arrived
   // 404 - not found
   // 201 - post successfully added to db
