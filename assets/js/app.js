let cl = console.log;
const postContainer = document.getElementById('postContainer')
const userForm = document.getElementById('userForm')
const title = document.getElementById('title')
const body = document.getElementById('body')
const userId = document.getElementById('userId')



let baseUrl ='https://jsonplaceholder.typicode.com/' 
let postsUrl = `${baseUrl}posts`


 let postAarr = []

const fillData = (eve)=>{  // this function will make object by submiting a form
  eve.preventDefault()
  let obj = 
  {
     title : title.value,
     body :body.value,
     userId : userId.value
  }
    
   cl(obj)
   userForm.reset()
   createPosts(obj)

}


// -----------------------------------------------------------------


const createPosts = (postObj) =>{  // thsi function's parameter will take object by it's argument i.e createPosts(obj).
   // actually it makes API Call to store object or data into DB.  
  
    let xhr = new XMLHttpRequest;

    xhr.open('POST',postsUrl,true);

    xhr.send(JSON.stringify(postObj)); // this will send object into DB

    xhr.onload = function()
    {
       if(xhr.status === 200 || xhr.status === 201)
       {
           cl(xhr.response)
           postObj.id = JSON.parse(xhr.response).id;
           postAarr.push(postObj)
           temp(postAarr)
       }
    }
}






// -----------------------------------------------------------------


const getAllPost = ()=>
  {
    let xhr = new XMLHttpRequest();
  
  xhr.open('GET',postsUrl, true);
  
  xhr.send();
  
  xhr.onload = function()
  {
     if(xhr.status === 200)
     {
      cl(xhr.response)
       postAarr = JSON.parse(xhr.response)
      // cl(postAarr)
      temp(postAarr)
     }
     else
     {
         alert('Somthing Went Wrong')
     }
  }
  }
  getAllPost()



// -------------------------------------------------


const onEdit = (ele)=>{
    cl(ele)
  
    let getId = ele.closest('.card').id;
    cl(getId)

    getobjUrl = `${baseUrl}/posts/${getId}`
    cl(getobjUrl)

    let xhr = new XMLHttpRequest;

    xhr.open('GET',`${getobjUrl}`,true)

    xhr.send()

    xhr.onload = function() {
      if(xhr.status===200)
      {
          cl(xhr.response)
          let getObj = JSON.parse(xhr.response);
          title.value = getObj.title,
          body.value = getObj.body,
          userId.value = getObj.userId
        }
        
          
    }
}


let temp = (arr)=>{
  let result = '';
  arr.forEach((add,i)=>{
    result+=`
    
        <div class="card mb-4" id="${add.id}">

                  <div class="card-header" style="background-color:${i % 2 === 0 ? 'lightblue': 'lightgreen'}">
                    <h2 class="text-center">${add.title}</h2>
                  </div>

                  <div class="card-body text-center" style="background-color: ${i % 2 === 0 ? 'white' : 'beige'};">
                    <p>${add.body}</p>
                  </div>

                  
                  <div class="card-footer d-flex justify-content-between"style="background-color: ${i % 2 === 0 ? 'lightgray' : 'lightpink'};">
                    <button class="btn btn-primary"onclick = 'onEdit(this)'>Edit</button>
                    <button class="btn btn-danger">Delete</button>
                  </div>

                </div>
    
    `
  })

     postContainer.innerHTML = result
}


userForm.addEventListener('submit',fillData)

