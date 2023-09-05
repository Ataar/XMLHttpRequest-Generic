
let std =
{
    fname:'Mateen',
    lname:'Ataar',
    age:26,
    profile:'angular developer'
}
//   js-object to JSON
let JsonObj = JSON.stringify(std)
console.log(JsonObj)



 // JSON to js-object
let obj01 = JSON.parse(JsonObj)
console.log(obj01)




// ***********************************************************
// ***********************************************************
                //   localStorage
 
// exap-1 of localStorage

let std01 =
{
    fname:'Mateen',
    lname:'Ataar',
    age:26,
    profile:'angular developer'
}

// localStorage.setItem to store object data in localStorage
// but here the data will be stored in key and value pair.
localStorage.setItem('saveLoc',JSON.stringify(std01));



// localStorage.removeItem to store object data in localStorage
// localStorage.removeItem('saveLoc')



// --------------------------------------------------------------

// exap-2

 // Key    value
let user ="Developer"; // >> it is a string not a object so JSON will not be used.
localStorage.setItem('profile',user)



// to get data from localStorage.
let getdata = localStorage.getItem('profile')
console.log(getdata)
// document.write(getdata)



// to remove data from localStorage.
// let remo =localStorage.removeItem('profile')
// let remo01 =localStorage.removeItem('saveLoc') 


// **************************************************************
// **************************************************************

                    // sessionStorage
                    
//  exap-1 of sessionStorage                   
let sess ="programmer";
sessionStorage.setItem('ses01',sess)

// note: if the tab is changed so session will pe expired and data will also be removed.




