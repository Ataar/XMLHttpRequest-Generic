            //    Events

            //   addEventListener()

// let btn = document.getElementById('btn') // here btn is id selector
// let onBtnClick=()=>{   // eventName and callbackfunction
//     alert('Btn Clicked') //text
// }
// btn.addEventListener('click' , onBtnClick) // two parameter

// *************************************************************************
        //  toggle ()
// eg:-1
// let btn = document.getElementById('btn')
// let btn0 = document.getElementById('box1')
// let onBtnClick=(eve)=>{
// eve.target.style.backgroundColor ='purple';
// btn0.classList.toggle('d-none')
// }

// btn.addEventListener('click' , onBtnClick) // two parameter

// ----------------------------------------------------------------------
//    eg:-2
// let btn = document.getElementById('btn')
// let btn0 = document.getElementById('box1')

// let click = (c1)=>{
//  c1.target.style.backgroundColor = 'pink';
//  btn0.classList.toggle('d-none')
// }

// btn.addEventListener('click',click)

// ---------------------------------------------------------------------------
//   hide and show Element using add and remove method
 let btn = document.getElementById('btn')
 let box1 = document.getElementById('box1')

 let click = () =>

 {
 let boxClass = box1.className;	
 console.log(boxClass)
  console.log(boxClass.includes('d-none'))
  if(boxClass.includes('d-none'))
  {
     box1.classList.remove('d-none')
  }
  else{
     box1.classList.add('d-none')
  }

}
 btn.addEventListener('click',click)


