document.title='Dom-part';

let hard = document.getElementById('hard')
let work = document.getElementById('work')

// console.log(hard,work)


hard.style.color ='black',hard.style.fontSize='30px',hard.style.letterSpacing='4px';
hard.style.fontFamily='elephant',hard.style.fontWeight='bold',hard.style.textAlign='center';
hard.style.listStyle='none',hard.style.position ='absolute',hard.style.top ='4%'
,hard.style.left ='3%',hard.style.width='15%',hard.style.borderRadius='0px';
 


work.style.color ='black',work.style.fontSize='31px',work.style.letterSpacing='4px';
work.style.fontFamily='elephant',work.style.fontWeight='bold',
work.style.textAlign='right',work.style.listStyle='none',work.style.position ='absolute',work.style.top ='4%'
,work.style.right ='3%',work.style.width='15%',work.style.borderRadius='0px';

// -----------------------------------------------------------------------------------------------------


// Element Selection Method
//single slection
// 1- getElementById
// >> it is single slection that returns Document object
let rec = document.getElementById('text')
console.log(rec)      
// here text is a object

// Now applying style to Element

text.style.backgroundColor='white',text.style.textAlign="justify",text.style.fontSize="25px"
text.style.padding='3px',text.style.fontFamily = 'Trebuchet MS',text.style.position ='absolute',text.style.top ='4.4%'
,text.style.left ='20%',text.style.right ='20%';
// text.style.top = '2px';

// use of classList.add method for styling 
let info = document.getElementById('info')
console.log(info)
info.classList.add('bg-danger','m-5','p-3','font-weight-bold')
// To remove styling 
// info.classList.remove('bg-danger','m-5','p-3','font-weight-bold')

// -----------------------------------------------------------------------------------------------------------

// There are 3 Properties to get content from DOM 
// ########   1-innerHTML    2-textContent    3-innerText   #######

// 1-innerHTML 

let kill = document.getElementsByClassName('demo')
let prac=demo.innerHTML;
console.log(prac)
demo.style.marginTop = "34%",demo.style.width='25%',demo.style.paddingLeft='2%',demo.style.fontSize ='20px';

//2-innerText 

let pink =document.getElementsByClassName('data')
let pro = data.innerText;
data.style.position='absolute',data.style.left='26em',data.style.top='28.5rem'
,data.style.width='25%',data.style.fontSize ='20px';
data.classList.add('font-weight-bold')

//3- textContent

let green =document.getElementsByClassName('card')
let pre =card.textContent;
card.style.position='absolute',card.style.right='1px',card.style.top='28.5rem'
,card.style.width='25%',card.style.fontSize ='20px';
card.classList.add('font-weight-bold')

