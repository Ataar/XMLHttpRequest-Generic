let img01 =document.getElementById('info');

let onMouseover =(eve)=>{
let img = eve.target;
img.style.borderRadius ='50%';

}

img01.addEventListener('mouseover',onMouseover)



let img02 = document.getElementById('info');

let onMouseout =(eve)=>{
    let img = eve.target;
    img.style.borderRadius ='0'; 
}

img02.addEventListener('mouseout',onMouseout)



// __________________________________________________________________________


let img1 =`./assets/images/tree.jpg`

let img2 =`./assets/images/laptop.png`

let jpg01 = document.getElementById('jpg01')


let onMouseover01 = (eve)=>
{
  let mg = eve.target.getAttribute('src')
  // here getAttribute is a method which returns the value of an element's attribute.
  eve.target.setAttribute('src',img2)
  
   // The setAttribute() method sets a new value to an attribute.
  console.log(img2)
}

let onMouseout01 =(eve)=>
{
   eve.target.setAttribute('src',img1)
  console.log(img1)
}
jpg01.addEventListener('mouseover',onMouseover01)
jpg01.addEventListener('mouseout',onMouseout01)












// let jpg01 = document.getElementById('jpg01')

// const onMouseover01 = (eve)=>
// {
//   let mouse = eve.target.getAttribute('src');
//   console.log(mouse)

//   //here if you want a atttirbute's value of a document object So Use getAttribute()method.
  
//   eve.target.setAttribute('src',img2)
// }
// jpg01.addEventListener('mouseover',onMouseover01)



// let jpg02 = document.getElementById('jpg01')

// const onMouseover02 = (eve)=>
// {
//   // let mouse = eve.target.getAttribute('src');
//   // console.log(mouse)

//   eve.target.setAttribute('src',img1)
// }
// jpg02.addEventListener('mouseout',onMouseover02)


