let btn =document.getElementById('btn');
let box =document.getElementById('box01');
let flag =true;

let Btn =()=>{
if(flag=== true)
{
    box.classList.add('d-none');
    flag = false;
    btn.innerHTML ='Add';
}

else{
    
    box.classList.remove('d-none');
    flag = true;
    btn.innerHTML ='Remove';
}
}

btn.addEventListener('click',Btn)






// Note:- ek click me box ko show karna hai aur dusre click me hide karna hai isliye hum yahan true aur false value use karte hain.

