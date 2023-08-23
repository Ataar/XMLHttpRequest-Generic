
// palindrome Algorithom

function palin(str)
{
    console.log(str.split(''))
}
palin('Madam')
// ----------------------------------------------------------------------
   
//    example-1

// function str(data)
// {
//     let str01 = data.split('').reverse().join('')
//     if(data.toLowerCase()===str01.toLowerCase())  
//     {
//         return `The Given string is palindrome.`
//     }
//     else
//     {
//         return `The Given string is not palindrome. `
//     }
// }

// console.log(str('MadAm'))

// --------------------------------------------------------------

// example-2

function str(data)
{
    let givenstr =data.toLowerCase().replace(' ','')
    let str01 = givenstr.split('').reverse().join('')
    if(givenstr===str01)  
    {
        return `The Given string is palindrome.`
    }
    else
    {
        return `The Given string is not palindrome. `
    }
}

console.log(str('Race Car'))

// -----------------------------------------------------------------

// example-3  to remove the special charectors 

function po(data)
{
    let givenstr =data.toLowerCase().replace(/[\w]/g,'')
    let str01 = givenstr.split('').reverse().join('')
    if(givenstr===str01)  
    {
        return `The Given string is palindrome.`
    }
    else
    {
        return `The Given string is not palindrome. `
    }
}

console.log(po('Race_Car'))

// --------------------------------------------------------------------------

// example -4  with ternary operator and return kyword

function po(data)
{
    let givenstr =data.toLowerCase().replace(/[\w]/g,'')
    let str01 = givenstr.split('').reverse().join('')
    return(givenstr===str01) ? `The Given string is palindrome.`:`The Given string is not palindrome.`
}

console.log(po('Race_Car'))


// ----------------------------------------------------------

function str(data)
{
    let givenstr =data.toLowerCase().replace(/[\w]/g,'')
    let revstr=''
    for(let i =givenstr.length-1 ; i>=0; i--)
{
    revstr+=givenstr[i]
}
return (givenstr === revstr) ? `The Given string is palindrome.`:`The Given string is not palindrome.` 
}

console.log(str('Race_Car'))

// ---------------------------------------------------------------------


let redu ='madam'
// console.log([...redu])
let str05 =Array.from(redu).reverse(data=>data)
console.log(str05)
      




