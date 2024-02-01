let stdForm01 = document.getElementById('stdForm01');
let id01 = document.getElementById('id01');
let email = document.getElementById('email')
let password = document.getElementById('password')

let onEmail = ()=>{
    if(email.type==='password')
    {
        email.type='text';
        id01.classList.replace('fa-eye-slash','fa-eye')
    }

    else
    {
        email.type='password';
        id01.classList.replace('fa-eye','fa-eye-slash')
    }
}

let onpassword = ()=>{
    if(password.type==='password')
    {
        password.type='text';
        id02.classList.replace('fa-eye-slash','fa-eye')
    }

    else
    {
        password.type='password';
        id02.classList.replace('fa-eye','fa-eye-slash')
    }
}

let obj01 = 'Mateen';
let obj02 = 'Ataar';

let onsubmit = (eve)=>
{
    eve.preventDefault()
    console.log('Clicked')

let emailval = email.value;
let passwordval = password.value;

   if(emailval===obj01 && passwordval===obj02)
   {
    Swal.fire({
        icon: 'success',
        title: ' Hi,Welcome',
        text:'You have logged in Successfully',
        timer: 3000
      })
   }

   else
   {
    Swal.fire({
        icon: 'error',
        title: 'Please Try Again',
        text:'Invalid Email or Password',
        timer: 3000
      })
   }

   stdForm01.reset();

}




stdForm01.addEventListener('submit',onsubmit)
id01.addEventListener('click',onEmail)
id02.addEventListener('click',onpassword)

