let person = // here person is object
{
   fname:'Jhone', // fname to age are keys and Jhone to 9735335323 are values.
   lname:'Doe',
    age:25,
    contact:9735335323
}

let fname01 = person.fname;  //fname01 and lname01 are declaration
let lname01 = person.lname;
console.log(fname01,lname01)  

// --------------------------------------------------------------------------------

            // Destructuring Of Object
// eg:- 1)
let {nativeplace,age,fname,lname} = person
//1) fname and lname are declarations. 
//2)it is a syntax of Destructuring of object not Object's syntax.
console.log(age,fname,lname01,nativeplace)  

// Note:- 1) hum ne fname aur lname ye 2 delaration ko declare kiya hai.
// ye declaration person object ke kyes se data lenge. 
// 2)in Destructuring of object the Declarations and kyes of object should be same. 

// --------------------------------------------------------------------------

//eg:- 2)
let person01 = 
{
  fname00:'sunil',
  lname00:'kale',
  age:34,
  contact:7835265625
}

//here if we want to change the key name so we use given key name with : and put the New name of key.
// eg:-fname00:firstName

let {fname00:firstName, lname00:lastName}=person01
console.log(firstName,lastName)

//agar console me lname00 define karenge to not-defined ye error show hoga. 




// eg:- 3)
const person00 = {
  firstName: 'Raju',
  lastName: 'Shrivastav',
  age: 25
};

function functionPro({ firstName, lastName, age }) {
  console.log(`My Name ${firstName} ${lastName} i am ${age} years old`);
}

functionPro(person00);


//eg:- 4)

const user = {
  username: "johndoe",
  email: "johndoe@example.com",
};

const getUserInfo = ({ username, email = "No email provided" }) => {
  return `Username: ${username}, Email: ${email}`;
};

console.log(getUserInfo(user)); // Output: "Username: johndoe, Email: johndoe@example.com"


//eg:-5)

const person10 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Using a regular function
function getFullName(person10) {
  const { firstName, lastName } = person10;
  return `${firstName} ${lastName}`;
}

console.log(getFullName(person10)); // Output: "John Doe"



// Using an arrow function with object destructuring
const getFullNameArrow = ({ firstName, lastName }) => `${firstName} ${lastName}`;

console.log(getFullNameArrow(person10)); // Output: "John Doe"


//eg:- 6)

let tuc =
{
   firstName00 :"Ravi",
   links : {
     social  :{
      twitter  :'www.twitter.com/ravi',
      fb :'www.facebook.com/ravi'
     },
     web :{
      blogs :'www.medium.com/ravi',
      training :'www.theultimatecoders.com',
      jsRef: ['www.javascript.info',"you Don't Know JS"]
     }
   }
}

let {jsRef} = tuc.links.web;let{fb} = tuc.links.social;
console.log(jsRef,fb)

// let {firstName00,blogs , training , jsRef,links,web} =tuc.links.web;
// let {fb,twitter} =tuc.links.social
// console.log(tuc.firstName00,blogs,training,jsRef,twitter,fb)
