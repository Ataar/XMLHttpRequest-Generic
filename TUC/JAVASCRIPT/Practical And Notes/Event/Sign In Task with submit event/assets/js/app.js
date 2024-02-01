
const sForm = document.getElementById('signInForm');

let email = document.getElementById('email');

let password = document.getElementById('password');


let emailFromDb = 'Mateen';
let passFromDb = 'Ataar';
// let stuData =[
//     {
//         email : 'Mateen@gmail.com', password : 705880
//     }
// ]

let onStd = (eve)=>{
    eve.preventDefault();
   
let emailVal = email.value;
let passVal = password.value;


if(emailVal===emailFromDb && passVal===passFromDb)
{
    // alert(`Sign In Successfully`)
    Swal.fire({
        icon: 'success',
        title: 'You are logged in Successfully',
        showConfirmButton: false,
        timer: 3000
      })
        sForm.reset();
// here reset method is used to reset the values of elements in a form.
    return true;
}


else
{
    // alert(`Invalid Username or Password`)
    Swal.fire({
        icon: 'error',
        // title: 'Oops...',
        title:'Sorry!',
        text: 'Invalid Username or Password',
        timer: 3000		
    })
        sForm.reset();
        // here reset method is used to reset the values of elements in a form.
    return false;

}


}
sForm.addEventListener('submit',onStd)




