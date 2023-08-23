//alert('hiiii')//alert('hello javascript')

// var cl= console.log;



   // array element printed bu using *** for-loop with increment ****

// let nums = [10,20, 40,50,60,70,90,100,102];
//   for(let i= 0; i < nums.length; i++)
//  {
//  	console.log(nums[i]);
//  }


  // array elemment printed by using for-loop with decrement

 let num = [10,20, 40,50,60,70,90,100,102];
  for(let i= num.length; i>=0; i--)
  {
 	console.log(num[i]);
  }

// -----------------------------------------------------------------------------------
     
     // array element printed by using **** ForEach Function or Method ****

// let nums = [10,20, 40,50,60,70,90,100,102];

//  nums.forEach (function(add)
//  {
//     console.log(add);
//  }
//  )	

// ----------------------------------------------------------------------------
       
   //array printed Using  **** for loop *****

// let pro = ['HTML','Css','Python','Javascript','Angular'];

// for(let i=0 ; i < pro.length ; i++)
//{
    //console.log(`${i+1} Hello World of`, pro[i]);
   //console.log(`${i+1}`,('Hello World of'), pro[i]);
   // console.log(`${i+1} Hello World of ${pro[i]}`)
//}

// --------------------------------------------------------------------------------------------



// let each = ['HTML','Css','Python','Javascript','Angular'];

// each.forEach(function(done,i){
  //console.log(done);
  //console.log (`${i+1} ${'Hello here is'}`,done);
   //console.log (`${i+1} Hello here is`,done);
   //console.log(`${i+1} Hello here is ${done}`)
//})

// -----------------------------------------------------------------------------------------------

// array printed using **** ul and li **** 

let tiny = ['HTML','Css','Python','Javascript','Angular'];

let roll = document.getElementById('demo');
let result= `<ul class='group-list'>`;

tiny.forEach(function(tara,i)
{
   
   
 result+=`<li class='list-group-item'> ${i+1} - Hello ${tara} </li>`     
})

result+= `</ul>`;

demo.innerHTML=result;

   
let tiny1 = ['Sachin','sunil','amit','rahul','vijay'];

let roll2 = document.getElementById('ul');
 result1= `<ul class='group-list'>`;

tiny1.forEach(function(goli,i)
{
   
   
 result1+=`<li class='list-group-item'>${i+1}  - Hello ${goli} </li>`     
})

result1+= `</ul>`;

ul.innerHTML=result1;

