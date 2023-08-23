  // Use it in For loop

// let skill = ['HTML','CSS','JAVASCRIPT','TYPESCRIPT','ANGULAR'];
// for(let i=0; i<skill.length; i++)
// {
//     console.log(`I Love ${skill[i]}`);
// }



let skill = ['HTML','Css','Javscript','Typescript','Angular'];
let Regd = document.getElementById('skill1')

let result=" ";
result += `<ul class="list-group">`;

for(let i =0 ; i<skill.length; i++)
{
result += `<li class="list-group-item text-right"> I Love ${skill[i]} </li>`;
}
result += `</ul>`

console.log(result);

skill1. innerHTML= result;









//  let greet = 'Hello';
//  greet = greet + " JavaScript "; OR // greet+= ' Javascript ';
// console.log(greet); 


