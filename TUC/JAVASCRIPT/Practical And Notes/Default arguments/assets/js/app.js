// function add(x,y) // here x and y are parameters
// // parameter means function own declaration
// {
//   return x+y;
// }
// // console.log(add(10,20)) // here 10 and 20 are arguments and result is 30
// console.log(add(10)) //here x+y(10+undefined = NAN)  means number+undefined = NAN
// -------------------------------------------------------------------------------------


// The defalut argument is a ES6 feature.
// it is used to set a value when a paremeter do not have value.
// suppose there are two parameter x and y where x has a value i.e 10 and y dont't have value
// at that time defalut argument is used to set the value. 

function add(x,y)
{
      if(!y) // here if there is no y and when the value of y is undefined (false).
        // then the negation(!) of y will be true
      {
        y=100;
      }
      return x+y;
}
// console.log(add(10,20))
console.log(add(10))

// Note:-
// parameter ko hum jo value assign karte hain use argument kahte hain.
// parameter me jo bydefalut arguments define kiye jate hain unko default arguments khete hain.

// ----------------------------------------------------------------------


// function calculateBill(total,tax,tip)
// {
//   if(!tax)
//   {
//     tax = .14
//   }
//   if(!tip)
//   {
//     tip = .1
//   }
//   return total+(total*tax)+(total*tip)

// }
// console.log(calculateBill(20000))


function calculateBill(total , tax = .14 ,tip = .1)// here .14 and.1 are arguments.
{
  return total + (total*tax)+(total*tip)
}

console.log(calculateBill(20000,.20,.15)) //these are also arguments.