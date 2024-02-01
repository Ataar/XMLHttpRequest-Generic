let password = document.getElementById('password')
let mypassword = document.getElementById('mypassword')
let mypassword01 = document.getElementById('mypassword01')
console.log(password)

let onPass = (eve)=>
{
    eve.preventDefault()
    if(password.type==='password')
    {
        password.type='text';
        mypassword.classList.replace("fa-eye-slash", "fa-eye")
    }

    else
    {
        password.type= 'password';
        mypassword.classList.replace("fa-eye", "fa-eye-slash")
    }
}

      let onPass01 = (eve)=>
      {
        if(text.type==='password')
        {
            eve.preventDefault()
            text.type='text';
            mypassword01.classList.replace("fa-eye-slash","fa-eye")
        }
        
        else
        {
            text.type= 'password';
            mypassword01.classList.replace("fa-eye","fa-eye-slash")
        }
       
    
      }

   



mypassword.addEventListener('click',onPass)
mypassword01.addEventListener('click',onPass01)
