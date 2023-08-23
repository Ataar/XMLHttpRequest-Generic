
// String Methods  :-

// 1- length :-

// This property is used to give the number of characters of a String. 

// eg-1:

let str = 'Hello world';
console.log(str.length)    // >> 11

// **************************************************************************************

// 2- replace()

// This method is used to replace a word. or it is used to change a part of  a string.

// eg-1

let str01 = 'welcome to pune';
console.log(str01.replace('welcome to pune','welcome to hydrabad.')) // >> welcome to hydrabad.

// -------------------------------------------------------------

// eg-2

let str02 = 'My Name is Mukesh';
console.log(str02.replace(/mukesh/i,'Khan'))
// >> My Name is Khan   (here i is a insensitive or regular expression)

// ------------------------------------------------------------------

// eg-3

let str03 = 'hello HTML,HTML is mostly used,i love HTML.'
let str04 =str03.replace(/html/ig, 'js')    
console.log(str04)   // >> hello js,js is mostly used,i love js.
 
// **************************************************************************************************

// 3- toLowerCase():-

// it is used ti convert a string into a lowercase letters.

let str05 = 'I Love Javascript';
console.log(str05.toLowerCase())  // >> i love javascript

// ************************************************************************************

// 4- toUpperCase()

// it is used to convert a string into Uppercase letters.

let str06 = 'i love javascript'
console.log(str06.toUpperCase())   // >>  I LOVE JAVASCRIPT

// ***************************************************************************************

// 5- trim()

//  this method is used to remove the empty space of a sting. 

let str07 = ' javascript  ';
console.log(str07)
console.log(str07.trim())

// ************************************************************************************

//  6- charAt()

// it is used to return the Character from a string with it's index position.

let str08 = 'Hello Javascript';
console.log(str08.charAt(0)) //>> H
console.log(str08.charAt(8)) //>> V

// **********************************************************************************

// 7- indexOf()

//  this method is used to find a  particular word of string and gives index position of that word. 
// if value is value not found it gives -1 .

let ind = 'Hello Jhon Hello Mack';
console.log(ind.indexOf('Jhon'))  //>> 6



// --------------------------------------------------------

// eg-2

let str0 = 'Hello JS Hello HTML Hello CSS';
let str10 = str0.indexOf('Hello')
console.log(str10) // >> 0

let str11 = str0.indexOf('Hello',str10+1)
console.log(str11) // >> 9 

let str12 = str0.indexOf('Hello',str11+1)
console.log(str12)  // >> 20




// ********************************************************************************************

// lastIndexOf()

// it is used to find the word with it's last index position and if it is not found it gives -1.

let lInd = 'Hello Sachin Hello Mahesh Hello Sachin';
console.log(lInd.lastIndexOf('Sachin'))   // >> 32

// ************************************************************************************

// There are some ways to extract the string

// 1- slice()
// 2-subString()
// 3-substr()

// 1-slice()

// This string method extracts a part of a string.

let sli = 'apple,banana,orange';
console.log(sli.slice(6,12)); // >> banana
 console.log(sli.slice(-13,-7)); // >> banana >> reverse
 console.log(sli.slice(6)); // >> banana,orange

//-----------------------------------------------------------------------------------
// 2- substring()

let sb = 'apple,banana,orange';
console.log(sb.substring(6,12))

// -----------------------------------------------------------------------------------------

// 3- substr()

let sub = 'apple,banana,orange';
console.log(sub.substr(6,6));

// *******************************************************************************************




























