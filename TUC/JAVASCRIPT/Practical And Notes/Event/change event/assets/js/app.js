let bg = document.getElementById('bgColor')
let bg01 = document.getElementById('b-color')

const onChange =(eve)=>
{
 let selectedColor = eve.target.value;
  // if we want to get info or data from Form-control so we us .value property
  console.log(selectedColor)
  bg01.style.backgroundColor =selectedColor
}

bg.addEventListener('change',onChange)