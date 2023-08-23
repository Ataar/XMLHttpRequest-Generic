                    //String Methods
   // eg1:-    
	
//let str ="Hello World";
//let strlen = str.length;
//console.log(strlen);
// here length is a property which gives us a No of character in given string.




    // eg2:- 
	 
/* const str = 'Life, the universe.';

console.log(` ${str.length}`);
// Expected output: "Life, the universe and everything. //34
 */
 
    // eg3:-
	
 /* let str01 = 'coeacadmy';
let str2 = (str01.length);
console.log(str2)
 */

// --------------------------------------------------------------------

// Now to  "replace" a word

//  eg1:-

// let str01 = " welcome to the beatiful world of Angular ";
// let str02 = str01.replace('Angular','Javascript');
// console.log(str02);//here we can change str01 {Angular printed}



// eg2:- // here is " i " is insensitive or regular expression.

// let str01 = " welcome to the beatiful world of Angular ";
// let str02 = str01.replace(/angular/i,"Javascript");
// console.log(str02);

// eg3:- here  " g " is global expression. 

// let str03 = "welcome to the beatiful world of Reactjs, reactjs is not suitable for large application and Reactjs is a library.";
// let str4 = str03.replace(/reactjs/ig,"javascript");
// console.log(str4);


    // eg4- 
	 
//let text = "Visit Microsoft!";
//let result = text.replace("Microsoft", "W3Schools");
//console.log(result)



// -------------------------------------------------------------------

// To change the text or content in lower case &  uppercase

//  let str01 = "Welcome To The Beatiful World Of Javascript"
//  console.log(str01.toLowerCase());
// console.log(str01.toUpperCase());


// ----------------------------------------------------------------------

// To Remove the Space around the content or value use " trim() " method 
//  eg 1:-
//  let str0 = "   Javascript   ";
//  console.log(str0);

//  let str1 = str0.trim();
//  console.log(str1);

    

// eg 2:-
//  let str0 = "   welcome to the world of javascript   ";
//  console.log(str0);

//  let str1 = str0.trim();
//  console.log(str1);

// -------------------------------------------------------------------------

 
// To concat the content use " concat  " method

// eg 1:-
// let str0 = "welcome";
// let str01 = " to the world of javascript";
// let str02 = " it is most popular language.";
// let str03 = str0  + str01 +  str02;
// console.log(str03);



// eg2:-
//  let str0 = "welcome";
//  let str01 = " to the world of javascript";
//  let str02 = " it is most popular language.";
//  let str03 = str0 .concat(str01,str02);
//  console.log(str03);


//eg 3:-
//  let str0 = "  welcome ";
//  let str01 = "to the world of javascript";
//  let str02 = "it is most popular language.";
//  let str03 = str0 .concat(str01,str02);
//  console.log(str03);

//  let str5 = str0 .concat(str01,str02).trim();
//  console.log(str5);


//-------------------------------------------------------------------------------------

// To print a Single Character Use " CharAt " Method 

//eg 1:-

//  let str01 = "Hello Javascript";
//  console.log(str01.charAt(0));
//  console.log(str01.charAt(7));
// //  console.log(str01.length);
// console.log(str01.charAt(14));

// eg 2:-

/* let str = "world";
console.log(str.charAt(str.length-1));
 */



//-----------------------------------------------------------------------------------------
let b = "its is a method";
console.log(b.indexOf('s',4));



 
 



