
let select = document.getElementById('colorset');
let sel01 =[...document.querySelectorAll('.all')]

let onChange = (eve)=>
{
    let color = eve.target.value;
    console.log(color)
    sel01.forEach(div => div.classList.add('d-none'))


    let select =[... document.querySelectorAll('.'+color)];
    select.forEach(d=>d.classList.remove('d-none'))
}

select.addEventListener('change',onChange)