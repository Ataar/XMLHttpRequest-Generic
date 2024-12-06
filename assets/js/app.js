let cl = console.log;
const postContainer = document.getElementById('postContainer')


let baseUrl = 'https://jsonplaceholder.typicode.com/';

let postsUrl = `${baseUrl}/posts`;

let xhr = new XMLHttpRequest();

xhr.open('GET',postsUrl, true);

xhr.send();

xhr.onload = function()
{
   if(xhr.status === 200)
   {
    cl(xhr.response)
    let data = JSON.parse(xhr.response)
    cl(data)
    temp(data)
   }
   else
   {
       alert('Somthing Went Wrong')
   }
}




const temp = (arr)=>{
  let result = '';
  arr.forEach((add,i)=>{
    result+=`
    
        <div class="card mb-4">
                  <div class="card-header" style="background-color:${i % 2 === 0 ? 'lightblue': 'lightgreen'}">
                    <h2 class="text-center">${add.title}</h2>
                  </div>
                  <div class="card-body" style="background-color: ${i % 2 === 0 ? 'white' : 'beige'};">
                    <p>${add.body}</p>
                  </div>
                  <div class="card-footer d-flex justify-content-between"style="background-color: ${i % 2 === 0 ? 'lightgray' : 'lightpink'};">
                    <button class="btn btn-outline-primary">Edit</button>
                    <button class="btn btn-outline-danger">Delete</button>
                  </div>

                </div>
    
    `
  })

     postContainer.innerHTML = result
}
