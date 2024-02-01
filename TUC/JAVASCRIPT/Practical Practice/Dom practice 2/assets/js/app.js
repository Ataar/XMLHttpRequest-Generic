// multiple selection method
// getElementsByClassName
// it is a multiple slection method
// it returns HTML collection
// it looks like array object but not an array

const show =document.getElementsByClassName('list-group-item')
console.log(show)
skill.style.color='ForestGreen',skill.style.fontSize = '1.5em',skill.style.fontWeight ='bold'
,skill.style.marginTop ='1rem';


 console.log(show[2],show[4],show[0],show[3],show[1]);
 let go =document.getElementsByClassName('text')
 text.style.backgroundColor ='black',text.style.color ='White';

 for(let i=show.length; i>=0; i--)
 console.log(show[i]);


 for(let i=0; i<show.length; i++)
 console.log(show[i])

//  Now if we want to print  the content in the form of array that is selcted by ClassName so we use ## Array.from()method ##

const show1 = Array.from(show)
console.log(show1)


// to add elements
show1.push('30 Students')
console.log(show1);


const show2= show1.push('30 student')
console.log(show2);


// to remove elements
const show3= show1.pop()
console.log(show3);


show1.forEach(ele=>console.log(ele))
// show1.forEach (ele=>{
//    console.log(ele)
// })


text.innerText = "The Ultimate Coders";
console.log(text.innerText)
console.log(text,text.innerText)


let show4 = skill.innerText
console.log(show4[0],show4[1],show4[2],show4[3],show4[4],show4[5],show4[6],show4[7],show4[8]
,show4[9],show4[10],show4[11],show4[12],show4[13],show4[14],show4[15],show4[16],show4[17],show4[18]);

const show5 = skill.textContent
console.log(show5)


let show6 =Array.from(document.getElementsByClassName('text'))
show6.forEach(ele=>{
    let data = ele.textContent;
    ele.textContent =`Hello,  I am  ${data}`
    add.style.color = "Navy", add.style.textAlign = 'center' ,add.style.fontSize ="1.5rem", add.style
    .fontWeight ='bold';add1.style.backgroundColor ="Maroon",add1.style.color ="white"
    // add1.classList.add('bg-danger') 
})


let show7 = Array.from(document.getElementsByClassName('list-group-item 1'))
console.log(show7)

open1.style.color ='Cyan',open1.style.backgroundColor ='DarkBlue',open1.style.fontSize ='20px',open1.style.textAlign ='center'
,open1.style.fontWeight ='bold';
show7.forEach((pro,i)=>{
    if(i % 2 !==0)
    {
       pro.style.color ='red',pro.style.fontSize ='20px',pro.style.fontWeight ='bold',pro.style.textAlign ='center'
        
    }
    else{
      pro.style.color ='black',pro.style.fontSize ='20px',pro.style.fontWeight ='bold'
    }
})

// show7.forEach((pro,i)=>
// {
//     if(i % 2==0)
//     {
//          pro.style.color ='yellow'
//     }
//     else{
//         pro.style.color ='lime'
//     }
// })

 str =Array.from('The Ultimate Coders')
console.log(str);
