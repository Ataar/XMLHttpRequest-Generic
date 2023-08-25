
const accoheading =[...document.querySelectorAll('.accoheading')];

let onTab =(eve)=>{
   let allclass = eve.target.className;
   console.log(allclass)

    accoheading.forEach(head=>head.classList.remove('active'))
    // eve.target.classList.add('active');
    // console.log([...eve.target.children][0])
    //here children property is used to return children element of selected element in the form of HTMLcollection.

      let icon =[...eve.target.children][0];
    if(allclass.includes('active')){
        eve.target.classList.remove('active')
        icon.classList.remove('fa-sort-up')
        icon.classList.add('fa-sort-down')
    }
    else{
        eve.target.classList.add('active')
        icon.classList.add('fa-sort-up')
        icon.classList.remove('fa-sort-down')
    }

    

}

accoheading.forEach(head=>{
    // console.log(head)

    head.addEventListener('click',onTab)
})