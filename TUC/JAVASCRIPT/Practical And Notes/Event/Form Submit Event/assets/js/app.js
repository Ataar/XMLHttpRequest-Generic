
let std = document.getElementById('std-form')
let fname01 = document.getElementById('fname')
let lname01 = document.getElementById('lname')
let email01 = document.getElementById('email')
let contact01 = document.getElementById('contact')
const stdContainer = document.getElementById('stdContainer')


let stdArray =[]

const template = (arr)=>{


    let result ='';

   arr.forEach((add , i)=>
    {
        result+=   `
        <tr>
        <td>${i+1}</td>
        <td>${add.fname}</td>
        <td>${add.lname}</td>
        <td>${add.email}</td>
        <td>${add.contact}</td>
      </tr>
        
        `   
    })

    stdContainer.innerHTML = result

}











let onSubm =(eve)=>
{
    eve.preventDefault();
    // console.log('Form Submitted')

     // To stop the sumbit event behaviour preventDefault() is used.



    let stu01 =
    {
       fname :fname01.value,
       lname :lname01.value,
       email:email01.value,
       contact:contact01.value

    }
     
    stdArray.push(stu01)

    template(stdArray)
    // console.log(stdArray);   
    eve.target.reset()
}




std.addEventListener('submit',onSubm)

// Note:- submit event has a default behaviour that if the submit event is triggerd it refresh a page fastly.  