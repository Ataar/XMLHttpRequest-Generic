let btn =document.getElementById('btn');
let box =document.getElementById('box01');
let flag =true;

function Btn(){
    // console.log(this)
if(flag=== true)
{
    // box.classList.add('d-none');
    // flag = false;
    // this.innerHTML ='Add';

    box.classList.add('d-none');
    flag =false;
    this.innerHTML ='Add';
}

 else{
    
       box.classList.remove('d-none');
      flag = true;
      this.innerHTML ='Remove';
  
 }    
 
}

btn.addEventListener('click',Btn)






// Note:- ek click me box ko show karna hai aur dusre click me hide karna hai isliye hum yahan true aur false value use karte hain.

