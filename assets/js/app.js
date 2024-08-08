
let cl = console.log;

let pass = document.getElementById('password')

let data = document.getElementById('data')


const onClick= () =>{
    if(pass.type==='password')
        {
            pass.type='text';
            
            data.classList.replace('fa-eye','fa-eye-slash')
        }
        
        else
        {
            pass.type='password';
            data.classList.replace('fa-eye-slash','fa-eye')
        }
        
}

data.addEventListener('click',onClick)