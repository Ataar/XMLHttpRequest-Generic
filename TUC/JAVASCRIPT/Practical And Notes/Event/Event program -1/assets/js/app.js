

let btn = document.getElementById('btn');
let box01 = document.getElementById('box01');


let OnB =()=>{
    // console.log('Btn Clicked')
    // box01.classList.toggle('d-none')

    let classes = box01.className;
    console.log(classes)
    console.log(classes.includes('d-none'))

    if(classes.includes('d-none'))
    {
        box01.classList.remove('d-none')
    }
    else{
        box01.classList.add('d-none')
    }
}


btn.addEventListener('click',OnB)



