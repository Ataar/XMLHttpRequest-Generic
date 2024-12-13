let cl = console.log;


const postContainer = document.getElementById('postContainer')
const userForm = document.getElementById('userForm')
const title = document.getElementById('title')
const body = document.getElementById('body')
const userId = document.getElementById('userId')
let sbBtn = document.getElementById('subBtn')

let upBtn = document.getElementById('upBtn')





// Create the loader div
let loader = document.createElement('div');
loader.className = 'loader d-none';
loader.id = 'loader';

// object.assign is a method which allows you to copy the properties of one or more objects (called source object)
// into a single target object
Object.assign(loader.style, {    // loader.style is the target object
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100vh',
  width: '100%',
  backgroundColor: 'rgba(255, 225, 255, 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '9999', // Ensure the loader is above other elements
});

// Add the spinner content inside the loader div
// spinner is used as content of loader HTML element
loader.innerHTML = `
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
`;

// Append the loader to the body or a specific target
   document.body.appendChild(loader);

// Optionally, log the loader to confirm
// console.log(loader);



let baseUrl ='https://jsonplaceholder.typicode.com/' 
let postsUrl = `${baseUrl}posts`


 let postAarr = []


 const makeAPI = (methodName, apiUrl, bodyMsg = null) => {
  loader.classList.remove('d-none')
  let xhr = new XMLHttpRequest();
  xhr.open(methodName, apiUrl);

  // xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.send( JSON.stringify(bodyMsg));

  xhr.onload = function () {
  loader.classList.add('d-none')
    if (xhr.status >= 200 && xhr.status <= 299) {
      
      let response = JSON.parse(xhr.response);

      if (methodName === 'GET') {
        if (Array.isArray(response)) {
          temp(response);
        } else {
          title.value = response.title;
          body.value = response.body;
          userId.value = response.userId;
          
          sbBtn.classList.add('d-none');
          upBtn.classList.remove('d-none');
        }

        
        
      } else if (methodName === 'PUT') {
        let updatedId = response.id;
        let updateCard = document.getElementById(updatedId);
        let card = [...updateCard.children]
        card[0].innerHTML = `<h2>${bodyMsg.title}</h2>`;
        card[1].innerHTML = `<p>${bodyMsg.body}</p>`;

        // if (updateCard) {
        //   updateCard.querySelector('h2').textContent = bodyMsg.title;
        //   updateCard.querySelector('p').textContent = bodyMsg.body;
        // }

        userForm.reset()
      sbBtn.classList.remove('d-none');
      upBtn.classList.add('d-none');

     } 
     
     else if(methodName==='DELETE')
     {
       let getIndex = apiUrl.indexOf('posts/');
       let id = apiUrl.slice(getIndex+6);
       document.getElementById(id).remove()
       
     }
     else if(methodName === 'POST')
     {
       let card = document.createElement('div')
       card.className = `card mb-4`;
       let postId = JSON.parse(xhr.response)
       card.id = postId.id;
       cl(card)
       card.innerHTML = `
       
        <div class="card-header"style="background-color: lightblue;">
                <h2 class="text-center">${bodyMsg.title}</h2>
              </div>
    
              <div class="card-body text-center"style="background-color:white;">
                <p>${bodyMsg.body}</p>
              </div>
    
              
              <div class="card-footer d-flex justify-content-between"style="background-color:lightgray;">
                <button class="btn btn-primary"onclick = 'onEdit(this)'>Edit</button>
                <button class="btn btn-danger"onclick = 'onDelete(this)'>Delete</button>
              </div>

              
      
      
      `
      postContainer.append(card);

      
      
      userForm.reset()
      PNotify.success({
        title: 'Successfully added',
        delay:1000
        
      });
    }
    

   }
 } 
} 


    
 
    
  makeAPI('GET',postsUrl)  


 const fillData = (eve)=>{
    eve.preventDefault()
    cl('Clicked')
    

    let obj = 
    {
       title:title.value,
       body:body.value,
       userId:userId.value,
       
    }
    cl(obj)
    makeAPI('POST',postsUrl,obj)
    
  }
  
    




const onEdit = (ele)=>{
   let editId = ele.closest('.card').id;
   console.log('Edit ID:', editId);
 localStorage.setItem('edit',editId);
   

   let editUrl = `${baseUrl}posts/${editId}`;
   cl(editUrl)

   
   
   const scroll =()=>{userForm.scrollIntoView({ block:'end', behavior:'instant' })};
   scroll()     
     
     makeAPI("GET",editUrl)
}

   




//   ############################################################################
   
  //  To scrolling we can use Diffrent Methods
   

    // document.getElementById('userForm').scrollIntoView({behavior: 'instant' , block :'end' });



 // -----------------------------------------------------------------------------------


  //  window.scrollTo(0, 0);

 // -----------------------------------------------------------------


   // document.documentElement.scrollTop = 0; // For modern browsers
 //  -------------------------------------------------------------------------



   // userForm.scrollIntoView({
   //   behavior: 'auto', // 'auto' for immediate scroll without smooth animation/   //   block: 'end',   // Align the top of the form with the top of the window
   // });

 // ---------------------------------------------------------------------------


//   // function scroll() {
//   //   window.scrollTo({
//   //     top: 0,
//   //     behavior: 'smooth'
//   //   });
//   // }
//   // scroll()


   // ------------------------------------------------------------------------

//   }




  //  ############################################################################

 
 
  const onUpdate=()=>{
    let updatedObj={
        title:title.value,
        body:body.value,
        userId:userId.value
    }
    cl(updatedObj);
    let updatedId=localStorage.getItem("edit");
    let updateUrl=`${baseUrl}posts/${updatedId}`;
    
    makeAPI("PUT",updateUrl,updatedObj);
}  




  const onDelete = (ele)=>{
    let getDelId  = ele.closest('.card').id;
    cl( getDelId)
  
    let delUrl = `${baseUrl}posts/${getDelId}`;
  
    makeAPI('DELETE',delUrl)
  }
   

  

// makeAPI('GET','https://jsonplaceholder.typicode.com/todos')  


// const createCards = (postObj)=>{
//   let card = document.createElement('div')
//   card.className = 'card mb-4';
//   card.id = postObj.id;
//   card.innerHTML = `
  
  
//     <div class="card-header"style="background-color: lightblue;">
//             <h2 class="text-center">${postObj.title}</h2>
//           </div>

//           <div class="card-body text-center"style="background-color:white;">
//             <p>${postObj.body}</p>
//           </div>

          
//           <div class="card-footer d-flex justify-content-between"style="background-color:lightgray;">
//             <button class="btn btn-primary"onclick = 'onEdit(this)'>Edit</button>
//             <button class="btn btn-danger"onclick = 'onDelete(this)'>Delete</button>
//           </div>
  
  
//   `
//   postContainer.append(card)
// }




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
                    

                    <button class="btn btn-danger"onclick = 'onDelete(this)'>Delete</button>
                  </div>

                </div>
    
    `
  })

     postContainer.innerHTML = result
}


userForm.addEventListener('submit',fillData)
upBtn.addEventListener('click',onUpdate)
// sbBtn.addEventListener('click',onsubBtn)

// Notes:--


// target: The object to which properties are added or merged.
// sources: One or more objects whose properties are assigned to the target object.