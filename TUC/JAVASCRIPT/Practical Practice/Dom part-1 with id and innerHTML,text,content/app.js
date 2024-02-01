let sel = document.getElementsByClassName('text')
console.log(sel)
// console.log(typeof sel)
// ----------------------------------------------------------

let sel01 = document.getElementById('info')
console.log(sel01)
// console.log(typeof sel01)
info.style.color ='red',info.style.fontSize ='30px';

// *********************************************************************

//we have 3 properties to get the content form document

// innerHTML ,textContent , innerText

let text = data.innerHTML.trimEnd();
console.log(text)

let text01 = data.innerText;
console.log(text01)

let text02 = data.textContent.trim();
console.log(text02)

// ****************************************************************************
data.innerHTML =`<strong> I Love Javascript !!!</strong>`
