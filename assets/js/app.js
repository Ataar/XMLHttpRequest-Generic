

let std = document.getElementById('stdForm')
let stdCon = document.getElementById('stdCon')
let submitBtn = document.getElementById('submitBtn')
let updateBtn = document.getElementById('updateBtn')

let fcont = document.getElementById('fname');
let lcont = document.getElementById('lname');
let econt = document.getElementById('email');
let ccont = document.getElementById('contact');
// let pcont = document.getElementById('password');

const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};
// the above function creates a uniq id repeatedly.
// hum uniq id send karte hain jab new data DB me store karna hota hai.
const uuid = generateUUID();
console.log(uuid);


// ye function har baar uniq id creat karega.


 
stdArray = [
  // {
  //   fname:'Mateen',
  //   lname:'Ataar',
  //   email:'mateen@gmail.com',
  //   contact:9834262017
]

// stdArray = JSON.parse(localStorage.getItem('stdData'))??[];

const onEdite = (ele)=>
{
  // console.log(ele.closest('tr').getAttribute('id'))
  let editId = ele.closest('tr').getAttribute('id')
  localStorage.setItem('editId',editId)
  let editObj = stdArray.find(std=>std.id===editId)
  //here find loop is used to match the object to given condition
  console.log(editObj)
  
  fcont.value = editObj.fname;
  lcont.value = editObj.lname;
  econt.value = editObj.email;
  ccont.value = editObj.contact;

  updateBtn.classList.remove('d-none');
  submitBtn.classList.add('d-none');


}

const onDelete = (ele)=>
{
  // console.log(ele)
  let deleteId =ele.closest('tr').id;
  // console.log(deleteId)
  let deleteIndex = stdArray.findIndex(std => std.id===deleteId);
  console.log(deleteIndex)
  stdArray.splice(deleteIndex,1)
  localStorage.setItem('stdData',JSON.stringify(stdArray));
  temaplting(stdArray)
}

let temaplting =(arr)=>{

  let result ='';

arr.forEach((ele,i)=>{

  result+= `


  <tr id='${ele.id}'>
      <td>${i+1}</td>
      <td>${ele.fname}</td>
      <td>${ele.lname}</td>
      <td>${ele.email}</td>
      <td>${ele.contact}</td>                    
      <td><button class="btn btn-primary" onclick="onEdite(this)">
      <i class="fa-regular fa-pen-to-square"></i>
      </button></td>
      <td><button class="btn btn-danger"onclick="onDelete(this)">
      <i class ="fa-solid fa-trash-can"></i>
      </button></td>
  </tr>
`
//The onclick event occurs when the user clicks on an HTML element. 
//in above code onEdite is a callBack function.
//This keyword represents that object on which event is binded.
})
stdCon.innerHTML =result;
}
stdArray = JSON.parse(localStorage.getItem('stdData'))??[];
 //agra DB  me data hai to wo data  

// console.log(stdArray)

temaplting(stdArray)

let onStd = (eve)=>
{
   eve.preventDefault();
   let std01 =
   {
     fname  :fcont.value,
     lname  :lcont.value,
     email  :econt.value,
     contact :ccont.value,
     id :generateUUID()
   

    //  password :pcont.value,
   }

   eve.target.reset();
   stdArray.push(std01)
   localStorage.setItem('stdData',JSON.stringify(stdArray))
   temaplting(stdArray)
   console.log(std01)

}

const updateBtn01 = () =>
 {
    let updateId = localStorage.getItem('editId')
    // console.log(`Updated ${updateId}`);
    // console.log(fcont.value)
    // console.log(lcont.value)
    // console.log(econt.value)
    // console.log(ccont.value)

    stdArray.forEach(add=>{
      if(add.id===updateId)
      {
        add.fname = fcont.value;
        add.lname = lcont.value;
        add.email = econt.value;
        add.contact = ccont.value;

      }
    })

    localStorage.setItem('stdData',JSON.stringify(stdArray));
    temaplting(stdArray);
    //here temaplting will creat tr.
    stdArray.reset();
}

std.addEventListener('submit',onStd)
updateBtn.addEventListener('click',updateBtn01)


// Note: 
//1) To store Multiple objects we have to use 'empty array'.
//2)if an Object is created We have to 'push' that Object in empty array. 

//  CURD
// 1) form Submit karte hain to data create hota hai use create karana khete hain.
// 2) hum localstorage se data get karte hain aur ui par show karte hain to use read operation khte hain.
// 3) 

// -------------------------------------------------------------------------------------------------

// samjho ek table me ek ek kar ke 20 object hain aur har ek par id hai
// to agar hume koi object ko update karna hai to hum phele object id ka use kar ke
// DB se object get karenge aur form me store karenge. 