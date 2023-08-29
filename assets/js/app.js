let stdForm = document.getElementById('stdForm');
let stdCon = document.getElementById('stdCon');

let fname01 = document.getElementById('fname')
let lname01 = document.getElementById('lname')
let email01 = document.getElementById('email')
let contact01 = document.getElementById('contact')

let stdArray =[
{
   fname :'Mateen',
   lname :'Ataar',
   email  :'mateen@gmail.com',
   contact:9734468690
},
{

  fname :'Sachin',
   lname :'Thakur',
   email  :'Sachin@gmail.com',
   contact:893523523

}
]

let tempalting=(arr)=>{


  
let result ='';
arr.forEach((add,i)=>{

  result+= `
  
<tr>
      <td>${i+1}</td>
      <td>${add.fname}</td>
      <td>${add.lname}</td>
      <td>${add.email}</td>
      <td>${add.contact}</td>
</tr>
  
  `
})
stdCon.innerHTML = result;

}

tempalting(stdArray)

const onStd =(eve)=>
{
  eve.preventDefault();

let stdObj =
  {
    fname : fname01.value,
    lname : lname01.value,
    email : email01.value,
    contact :contact01.value
  }
// console.log(stdObj)
   stdArray.push(stdObj)
   eve.target.reset();
   tempalting(stdArray)
}

stdForm.addEventListener('submit',onStd)




// Note:
// 1) hame templating table ko hamesha Function Ke ander lena hota hai.

// 2)form contorl me se data lene ke liye Hum '.value' ye property use karte hain.
// 3) tempalating ka use nahi karna hai kyoun ke templating sabhi arr ke ko ittrate kar ke 
  // data or tr remove kar ke wahi data or tr dobara store kar raha hai.