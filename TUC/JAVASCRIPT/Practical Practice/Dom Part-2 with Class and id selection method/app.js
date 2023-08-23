

const col = document.getElementsByClassName('list-group-item')
console.log(col)
// console.log(col.length   )


// for(let i =0 ;i<col.length; i++)
// {
//     console.log(col[i])
// }

let array =Array.from(col);
console.log(array)


array.forEach(element => {
    // console.log(element)
    console.log(element)
});

// -------------------------------------------------------

let text =Array.from(document.getElementsByClassName('list-group-item'))
text.forEach(ele=>{
    let text = ele.textContent;
    ele.textContent = `I Love ${text}`
})

// ----------------------------------------------------------------------------


let text01 =Array.from(document.getElementsByClassName('list-group-item'))
console.log(text01)

text01.forEach((ele,i)=>{
    if(i % 2!==0)
    {
       ele.classList.add('bg-danger')
    }
    else{
        ele.classList.add('bg-info')
    }
})

// ------------------------------------------------------------------------------


let d01 = document.getElementsByClassName('list-group-item');
console.log(d01);

let d02 =Array.from(d01);
console.log(d02);

d02.forEach((ele,i)=>{

   let text = ele.textContent;
   ele.textContent = `I Love ${text}`
  if(i % 2==0)
  {
   ele.classList.add('bg-success','text-danger','h5','text-center')
  }
  else
  {
   ele.classList.add('bg-info','text-warning','h5','text-center')
  }

})


// **************************************************************************

let tg =document.getElementsByTagName('li')
console.log(tg[0])

// let tg01= Array.from(document.getElementsByTagName('li'));
 let tg01= [...document.getElementsByTagName('li')]
 console.log(tg01)

    // tg01.forEach(ele=> console.log (ele.innerText))

tg01.forEach(ele=>{
    console.log(ele.innerText)
})

// *******************************************************************


