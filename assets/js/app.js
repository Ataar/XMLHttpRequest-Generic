
let password = document.getElementById('password') // input element has been selected by it's id  

let data = document.getElementById('data')    // i element has been selected by it's id


const onPassword = ()=>{
    // console.log('Clicked')
    const ispasswordVisible = password.type==='password'; // it checks that if the type and value is same then it return true value.

    password.type = ispasswordVisible ? 'text' : 'password'; // it checks if ispasswordVisible is true so set the password type to 'text'
   //  if it is flase then set the password type to 'password.



   
   data.classList.toggle('fa-eye-slash',ispasswordVisible); 
//    This line toggles the class 'fa-eye-slash' on the element data.
// if ispasswordVisible is true , the class 'fa-eye-slash' will be added to data





    data.classList.toggle('fa-eye',!ispasswordVisible);
    // This line toggles the class 'fa-eye' on the element data.
    // if ispasswordVisible is false ,  the class 'fa-eye' will be added to data

}


data.addEventListener('click',onPassword) 


// *********************************************************************************************************************





// let password = document.getElementById('password');
// let data = document.getElementById('data');


// const onPassword=()=>{
  
//     if(password.type==='password')
//     {
//         password.type='text';
//         data.classList.add('fa-eye-slash')
//         data.classList.remove('fa-eye')
//     }
//     else
//     {
//         password.type='password';
//         data.classList.add('fa-eye')
//         data.classList.remove('fa-eye-slash')
// }

// }


// data.addEventListener('click',onPassword);



