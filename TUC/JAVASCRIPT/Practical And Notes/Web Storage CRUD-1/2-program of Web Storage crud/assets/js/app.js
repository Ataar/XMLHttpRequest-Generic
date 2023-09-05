

let std = document.getElementById('stdForm')
let stdCon = document.getElementById('stdCon')

let fcont = document.getElementById('fname');
let lcont = document.getElementById('lname');
let econt = document.getElementById('email');
let ccont = document.getElementById('contact');
// let pcont = document.getElementById('password');

stdArray = [
  // {
  //   fname:'Mateen',
  //   lname:'Ataar',
  //   email:'mateen@gmail.com',
  //   contact:9834262017
  // }
]

let temaplting =(arr)=>{

  let result ='';

arr.forEach((ele,i)=>{

  result+= `


  <tr>
      <td>${i+1}</td>
      <td>${ele.fname}</td>
      <td>${ele.lname}</td>
      <td>${ele.email}</td>
      <td>${ele.contact}</td>
  </tr>
`

})
stdCon.innerHTML =result;
}
stdArray = JSON.parse(localStorage.getItem('stdData'))

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
     contact :ccont.value
    //  password :pcont.value,
   }

   eve.target.reset();
   stdArray.push(std01)
   localStorage.setItem('stdData',JSON.stringify(stdArray))
   temaplting(stdArray)
  //  console.log(stdArray)

}


std.addEventListener('submit',onStd)



// Note: 
//1) To store Multiple objects we have to use 'empty array'.
//2)if an Object is created We have to 'push' that Object in empty array. 

//  CURD
// 1) form Submit karte hain to data create hota hai use create karana khete hain.
// 2) hum localstorage se data get karte hain aur ui par show karte hain to use read operation khte hain.
// 3)