



let password = document.getElementById('password');
let data = document.getElementById('data');

const onPassword = () => {
    const isPasswordVisible = password.type === 'password';
    password.type = isPasswordVisible ? 'text' : 'password';  // here ternary operator is used as if else
    data.classList.toggle('fa-eye-slash', isPasswordVisible); // isPasswordVisible contain 'text'
    data.classList.toggle('fa-eye', !isPasswordVisible);       // !isPasswordVisible contain 'password'
};

data.addEventListener('click', onPassword);





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



