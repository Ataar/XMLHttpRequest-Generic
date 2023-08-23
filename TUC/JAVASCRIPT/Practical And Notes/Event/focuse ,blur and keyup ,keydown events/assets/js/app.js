let username = document.getElementById('username')

let onFocuse = (eve)=>{

    eve.target.style.border = '2px solid orange';
}

let onBlur = (eve)=>{

    eve.target.style.border ='2px solid blue';
}

const onKeyDown = (eve)=>
{
    eve.target.style.backgroundColor ='blue';
}

const onKeyup = (eve)=>
{
    eve.target.style.backgroundColor = 'white';
    console.log(eve.target.value)
}


username.addEventListener('focus',onFocuse);
username.addEventListener('blur',onBlur)

username.addEventListener('keydown',onKeyDown);
username.addEventListener('keyup',onKeyup);

// whatever the data is typed by user you can get that data by using Keyup method.