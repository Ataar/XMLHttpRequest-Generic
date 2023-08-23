let btn =document.getElementById('btn');
let box =document.getElementById('box01');
let flag =true;

let Btn =(eve)=>{
    // console.log(this)
    //here eve stands for event which is a parameter taht gives PointerEvent Object.
    //it represents to click Event. 
    console.log(eve.target)
    if(flag===true)
    {
        box.classList.add('d-none');
        flag=false;
        eve.target.innerHTML='Add'
       // here target is a property.
       // eve.target gives the button object or represents button 
    }

    else
    {
        box.classList.remove('d-none');
        flag=true;
        eve.target.innerHTML='Remove'
        
    }
}

btn.addEventListener('click',Btn)




// Note:- ek click me box ko show karna hai aur dusre click me hide karna hai isliye hum yahan true aur false value use karte hain.

