// Enumarating objects

function Circle (rad)
{
    this.rad =rad;
    this.defaultLocation = {x:0,y:0}
}
   let cir = new Circle(100)
console.log(cir)
console.log(cir.rad)
console.log(Circle.name)
console.log(Circle.length)
console.log(typeof Circle)
console.log(cir['rad']) 

for(let k in cir)
{
    console.log(cir[k])
}

let str = Object.keys(cir)
console.log(str)

if('rad'in cir)
{
    console.log('cir has rad property')
}

if('red'in cir)
{
    console.log('cir has red property')
}
else{
    console.log('cir has not red property')
}

// --------------------------------------------------------------------

let arr = ['HTML','Css','js','Angular','Sass','Typescript']
for(let key in arr)
{
      console.log(arr[key])
    // console.log(key)
}

// -------------------------------------------------------------------------

    let ar = ['HTML','Css','js','Angular','Sass','Typescript']
    // console.log(`Using forof`)
   for(let k of ar)
   {
      console.log(k)
   }
   
// -------------------------------------------------------------------

let str0='Hi it is a coding of javascript';
for(let i of str0)
{
    console.log(i); 
}


let pra = document.getElementsByClassName('para')
console.log(pra)
for(let k of pra)
{
    console.log(k)
}


let pra0 = document.querySelectorAll('.para')
console.log(pra0);
for(let k of pra0)
{
    console.log(k)
}
// -----------------------------------------------------------------

let object =
{
    userid1:{
        Title:'Title one',
        Content:'Content one'
        },

    userid2:
    {
        Title:'Title two',
        Content:'content two'
    },
    userid3:
    {
        Title:'Title three',
        Content:'content three'
    },
    
}
// --------------------------------------------------------------------
// for(let k in object)
// {
//     console.log(k)
//     console.log(object[k])
// }


 let array = []
// for(let k in object)
// {
//     // console.log(object[i])
//     let o = 
//     {
//         Title:object[k].Title,
//         Content:object[k].Content,
//         id:k
//     }
//     array.push(o)
// }
// console.log(array)

// --------------------------------------------------------------

for(let k in object)
{
    console.log(object[k])

    let op =
    {
        ...object[k],
        id :k
    }

    array.push(op)
}
console.log(array)