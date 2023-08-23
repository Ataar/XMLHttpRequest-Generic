// let str ='I love javascript';
// console.log(str)
// console.log(str.replace('I love javascript','tpircsavaj evol I'))

// let str01 = str.split('')
// console.log(str01)

// let str02 =str01.reverse()
// console.log(str02)

// let str03 =str02.join('')
// console.log(str03)
// ----------------------------------------------------------------
   
    // Algorithom reverse of string with function

// let data01 ='I love javascript';
//  function revstr(str)
// {
//     let str01 = str.split('')
//     let str02 =str01.reverse()
//     let str03=str02.join('')
//     return str03

  
// }
// console.log(revstr(data01))




// SHORT FORM OF ABOVE PROGRAM
//   example-1
// let data01 ='I love javascript';
// function str(str01){
// let data = str01.split("").reverse().join('')
//   return (data)
// }
// console.log(str(data01))


// example-2
let data01 ='I love javascript';
function str(str01)
{
    return str01.split('').reverse().join('')
}
console.log(str(data01))

// -------------------------------------------------------------------
    // Second method to reverse a an array using for-loop
let arr = [10,20,40,50,60]
// console.log(arr.reverse())
for(let i = arr.length-1; i>=0; i--)

{
    console.log(arr[i])
}

// -----------------------------------------------------------

// Third method to reverse a string using for-loop

// let text ='I Love Javascript'
// for(let i = 0; i<=text.length-1; i++)
// {
//     console.log(text.charAt(i))
// }


let recu ='I Love Javascript';
let data =''
for(let i=recu.length-1; i>=0 ; i--)
{
    // console.log(recu[i])
    // console.log(recu.charAt(i))
   data+=recu[i]
}
console.log(data)


// fourth method to reverse a string using function and for-loop

let re ='I Love Javascript';
let opt ='';
function rec(str05)
{
    for(let i=re.length-1; i>=0 ; i--)
    {
        opt += str05[i];
    }
   
    return opt
}
console.log(rec(re))
 

























































