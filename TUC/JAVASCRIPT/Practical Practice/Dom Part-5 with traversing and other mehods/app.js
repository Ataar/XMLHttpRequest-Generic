// Travesing 
// it is relationship between the elements in the form of parent and child


// parentElement property and parentNode

// eg-1
// const sel = document.getElementById('imp01')
// const sel01 =imp01.parentNode;
// const sel01 = imp01.parentElement;
// console.log(sel01)

// ----------------------------------------------------------------------
 
    // eg-1
// let row  = imp01.parentElement.parentElement.parentElement;
//    console.log(row)

// ************************************************************************ 

//  closest()

// eg-2
// let sell = document.getElementById('imp01')
// let row01 =imp01.closest('.row');
// console.log(row01)

// ---------------------------------------------------------------------------

// eg-3

// let row02 =imp01.closest('div');
// console.log(row02)


// **********************************************************************************************


// childNodes property
// // eg-1
// let child = document.getElementById('skill')
// let chi01 = skill.childNodes;
// let chi02 = [...skill.childNodes]
// console.log(chi01);


// **********************************************************************************************

// children property

// eg-1
// let d = document.getElementById('skill')
// let d01 =skill.children;
// let d02 =[...skill.children]
// console.log(d01)


// d02.forEach(element =>element.classList.add('bg-danger','text-white')); 


// eg:-2

// let sil02 = skill.children[1];
// console.log(sil02)




// eg-3
// const sel = document.querySelector('#imp01')
// const sel01 = imp01.children;
// console.log(sel)                                           



// ******************************************************************************************


//  firstChild
// let pra = skill.firstChild;
// console.log(pra)
// ********************************************************************************************

// firstElementChild

// let sil = skill.firstElementChild;
// console.log(sil)

// *************************************************************************************************

// lastElementChild

// let sil01 = skill.lastElementChild;
// console.log(sil01)
// *********************************************************************************

// childElementCount

// let count = skill.childElementCount;
// console.log(count)

// *****************************************************************************

// nextSibling Property

// let nex = skill.nextSibling;
// console.log(nex)
// ***************************************************************************

// nextElementSibling

// let nex01 = text.nextElementSibling;-
// console.log(nex01);

// **********************************************************************

 // previousElementSibling
// let nex01 = text01.previousElementSibling;-
// console.log(nex01);
// *************************************************************************


// append() and prepend()

// eg-1  append
// let add = document.getElementById('skill')
// let lang = document.createElement('li')
// lang.className = 'list-group-item';
// let text = document.createTextNode(`0 Visual-Basic`)

// lang.append(text)
// skill.prepend(lang)
// ----------------------------------------------------------------------------------

// eg-1 prepend
// let c = document.createElement('li');
// c.className ='list-group-item';
// let c2 = document.createTextNode(`Python`)

// c.prepend(c2);
// skill.append(c)
// ----------------------------------------------------------------------------------------

// let doc =document.getElementById('skill')
// let c = document.createElement('li')
// c.classList = 'list-group-item';
// let c2 = document.createTextNode(`Visual Basic`)

// c.append(c2);
// skill.prepend(c)
// -------------------------------------------------------------------------------------


// let d01 = document.createElement('li')
// c.classList = 'list-group-item';
// let d02 = document.createTextNode(`Visual Basic`)

// d01.prepend(d02)
// skill.append(d01)

// -----------------------------------------------------------------------------------------
      
// let rem = document.getElementById('skill')
// let head = document.createElement('h1')
// head.classList = 'demo'
// let h01 = document.createTextNode(`Languages`)

// head.append(h01)
// skill.prepend(head) 

// ----------------------------------------------------------------------------------------------
// let ab=  document.getElementById('skill')
// const para = document.createElement("p");
// para.classList = 'demo'
// const node = document.createTextNode("This is new.");

// para.append(node)
// skill.prepend(para)

// ***************************************************************************************


   //add and remove 

//    eg-1

// let sel = document.getElementById('skill')
// let sel01 =[...skill.children];
// console.log(sel01)

// sel01.forEach(ele=>ele.classList.add('bg-info','text-white'));

// text01.classList.remove('bg-info');
// text01.classList.add('bg-warning');
// text.classList.add('bg-danger');
// -----------------------------------------------------------------------------

// remove()

// eg:1

// let sel = document.getElementById('paper')
// sel.remove();

// -------------------------------------------------------------------------


//  add()

//   eg-1

// let ab=  document.getElementById('skill')
// ab.classList.add('bg-dark')
// skill.style.color='red',skill.style.fontSize ='17px';
// let para = document.createElement('p');
// para.style.color='white'
// para.className = 'demo'
// const node = document.createTextNode(`
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam non,
//  placeat enim modi et pariatur similique laboriosam aliquid impedit eum architecto
//  , cupiditate eius ab deserunt doloribus omnis natus, odit vero.`);

//  para.append(node)
//  skill.prepend(para)

// **************************************************************************************


// before()method
// let head = document.getElementById('skill')
// let h01 = document.createElement('h1');
// let h02 =document.createTextNode(` Welcome To The Js World `)
// h01.style.color='red',h01.style.textAlign = 'center' ;

// h01.append(h02)
// skill.before(h01)

// ************************************************************************************

//after()method

// eg-1

// let head01 = document.getElementById('skill')
// let he01 = document.createElement('h1');
// let h03 =document.createTextNode(` Finishing point `)
// he01.style.color='red',he01.style.textAlign = 'center' ;

// he01.append(h03)
// skill.after(he01)

// ---------------------------------------------------------------------

// eg-2

let para01= document.getElementById('skill')
let para02 = document.createElement('p');
para02.className = 'alert alert-info';
para02.innerHTML = `This is a paragraph which is taken by using after method`
skill.after(para02)