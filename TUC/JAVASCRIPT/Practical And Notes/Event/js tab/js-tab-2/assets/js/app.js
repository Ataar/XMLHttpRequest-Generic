
let tab = [...document.querySelectorAll('.tabs li')];
let tab01 = document.querySelectorAll('.tabcontent');

let onTab =(eve)=>{
    let data = eve.target.getAttribute('data-id');
    console.log(data)

    tab01.forEach(d=>d.classList.remove('active'));
    document.getElementById(data).classList.add('active');


   tab.forEach(p=>p.classList.remove('active'))
   eve.target.classList.add('active')

}


tab.forEach(li=>{
    // console.log(li)

    li.addEventListener('click',onTab)
})