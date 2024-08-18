let cl = console.log;
let data = document.getElementById('data');  



let dataBlog = [   // Consider as DB
    {
        title:'A. P. J. Abdul Kalam',
        content:'He thus came to be known as the Missile Man of India for his work on the development of ballistic missile and launch vehicle technology.'
    },
    {
        title:'Homi J. Bhabha',
        content:'Homi Jehangir Bhabha, FNI,[3] FASc,[1] FRS[4](30 October 1909 to 24 January 1966) was an Indian nuclear physicist who is widely credited as the "father of the Indian nuclear programme".'
    }
        
        
];

    let createSpan = document.createElement('h5');  // h5 element is created with demo class
    createSpan.classList.add('d-none');
    cl(createSpan)
    let successIcon = document.createElement('i')  // i elemnt is craeted for icon class
    successIcon.classList.add("fas", "fa-check-circle")


    createSpan.appendChild(successIcon) // append icon to h5 element

    createSpan.appendChild(document.createTextNode('Hi, You are great.'))  // createTextNode is used to create a new text
    // for an h5 element in document.
   

    data.appendChild(createSpan);  // h5 element which contains text and icon will be appended to parent element get id.


    // -------------------------------------------------------------------------------------------------------------------------



function createObjBlog(data) {        //  This function call API call to create/send data object in DB.
    setTimeout(() => {
        const error = Math.random()>=.5 ? false : true ;         
        if (!error) {
            dataBlog.push(data)    
            createSpan.classList.remove('d-none')
            readBlog();// it gives data from DB
            
        } else {
            
            
            PNotify.error({
                title: 'Sorry, there is something wrong?',
                delay: 5000000,
            });
            
        }
    }, 1000);
}




// --------------------------------------------------------------------------------------------------------------



function readBlog() {           // this function call API call to get data from DB and here your choice where you want to store data.
    setTimeout(() => {
      let error =  Math.random()>=.5 ? false : true ;
      if(!error)
      {
          
          createSpan.classList.add('d-none')
          let data = dataBlog;
          temp(data)
          
         
          
        }
        else
        {
            createSpan.remove('d-none')
            PNotify.error({
                title:'Plaese try After Sometime'
            })
        }
      
    }, 500);
}

      
// ---------------------------------------------------------------------------------------------




function temp(arr) {    // this function is used for templtating to show data On UI.
    let result = '';
    arr.forEach(getdata => {
        result += `
          
            <div class = col-md-6 offset-3>
            <div class="card  mb-4">
            <div class="card-header">${getdata.title}</div>
            <div class="card-body">${getdata.content}</div>
            <div class="card-footer d-flex justify-content-between">
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger">Delete</button>
        </div>
        </div>
        </div>
        `;
    });
    data.innerHTML = result;
}

// Example call to createObjBlog
createObjBlog({
    title: "Hi Everyone! What's Up",
    content: 'Can you please hold down? It is being moved.'
});







// const blogArr = [   // Suppose this is Our Database
//     {
//         title:'Hi Rahul',
//         content:'plaese come with me to submit project'
//     }
// ];

// function createBlog(blogData)   // this function is used to create blog objects and store into database.
// {
//     setTimeout(() => {        // setTimout has two arguments i.e callback function and timer.
//         // it is a web browser API which makes the behavior of js synchronus to asynchronus. 

      
//      const error = false;
//      if(!error)
//         {
//             blogArr.push(blogData)
//             readBlog()
//             // alert('Yes, You Got It')
//         }
//         else
//         {
//             alert('Plaese Check You Code again')
//         }    

//     },2000); // time to post/send API Call
// }

// // -------------------------------------------------------------------------------


// function readBlog()   // this function is used to bring the data / blog objects form database.
// {
//     setTimeout(() => {  
//       let data = blogArr
//       cl(data)
//       temp(data)    
//     },1000);
// }

// createBlog({     // it contains arguments
//     title: 'Lorem ipsum dolor sit amet consectetur.',
//     content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, provident!'
// })




// // ------------------------------------------------------------------------------------------



// let data = document.getElementById('data')   // the html element is selected by id.

// function temp(add)  // this function is used for templating to show UI data
// {
//    let ShowUI = '';  

//    add.forEach(takeObject=>{

//     ShowUI+=`
    
//            <span>${takeObject.title}</span>
//            <p>${takeObject.content}</p>
//     `

//    });

//   data.innerHTML = ShowUI

// }
