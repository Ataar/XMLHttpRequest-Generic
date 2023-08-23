//alert('hiiii')

//To Print from 1 to 50 with " Fizz-Buzz ".



// eg 1 :-
//     for(let i = 1; i <= 50; i++)
//     {
//     if(i % 3 === 0)
//     {
//       console.log('Fizz')
//     }
//       else if(i % 5 === 0)
//     {
//      console.log('Buzz');   
//     }

//     else if(i % 3 === 0  && i % 5 === 0 )
//     {
//       console.log('FizzBuzz');
//     }

//     else
//     {
//        console.log(i);
//     }
//  }
      

// NOTE:- here the value of i is 1 which is less than 50 
// in if statement, 1 and 2 won't be devided by 3 and 5 so result will be 1 2 
// 3 will be divided by 3 so result will be ' Fizz ' and 4 will not and 5 will be devided by 5 so result will be ' Buzz '.




  //  eg 2:-

//  for(let i = 1; i <= 50; i++)
//  {
//      if(i % 3 === 0 && i % 5 === 0)
//      {
//          console.log('FizzBuzz');
//     }

//     else if(i % 5 === 0)
//     {
//         console.log('Buzz');
//     }

//     else if(i % 3 === 0)
//     {
//         console.log('Fizz');
//     }

//     else
//     {
//         console.log(i);
//     }
//  }




       // eg3:-

// for(let i = 7; i <= 100; i++)             // output>> 7, 8-buzz, 9, 10-fizzbuzz, 11, 12-buzz, 13, 14, 15-fizbuzz, 16-buzz, 
//  {
//      if(i % 5 === 0 && i % 4 === 0)
//      {
//          console.log('Fizz');
//     }

//     else if(i % 5 === 0)
//     {
//         console.log('FizzBuzz');
//     }

//     else if(i % 4 === 0)
//     {
//         console.log('Buzz');
//     }

//     else
//     {
//         console.log(i);
//     }
//  }

// ***************************************************************************



 //    Algorithom Of Fizz-Buzz 

 // Note:- it is a proper way to use Fizz-Buzz With Function

         //eg 1:-
            
        // function fizzbuzz (p1 , p2)
        // {
        // for(let k = p1; k <= p2; k++)
        // {
        // if(k % 3 === 0 && k % 5 === 0)
        // {
        //     console.log('Fizzbuzz');
        // }

        // else if(k % 5 === 0)
        // {
        //     console.log('Buzz');
        // }

        // else if(k % 3 === 0)
        // {
        //     console.log('Fizz');
        // }
        // else
        // {
        //     console.log(k);
        // }
        // }
        // }

        // fizzbuzz(1 , 150);


      // ---------------------------------------------------------

           //eg 2:-

        //   function practice (a1 , b2)
        //   {

        //   for(let r = a1; r <= b2; r++)
        //   {

        //   if(r % 7 === 0)
        //   {
        //   console.log('Buzz');
        //   }

        //   else if(r % 5 === 0)
        //   {
        //   console.log()
        //   }

        //   else if(r % 7 === 0 && r % 5 === 0)
        //   {
        //     console.log('Fizzbuzz')
        //   }

        //   else
        //     {
        //        console.log(r);
        //     }
        //     }
        //     }
          

        //   practice(20,70);

// ----------------------------------------------------------------------



          // eg 3:-  

        //  function practice (a1 , b2)
        //    {
            
        //     if(a1>=b2)
        //     {
        //         alert('a1 should be less than b2' )
        //         return
        //     }

        // for(let r = a1; r <= b2; r++)
        //    {

        //    if(r % 7 === 0)
        //   {
        //    console.log('Buzz');
        //    }

        //    else if(r % 5 === 0)
        //    {
        //    console.log()
        //    }

        //    else if(r % 7 === 0 && r % 5 === 0)
        //    {
        //      console.log('Fizzbuzz')
        //    }

        //    else
        //      {
        //         console.log(r);
        //      }
        //      }
        //     }
          

        //    practice(2000,70);


// ---------------------------------------------------------------


         // eg 4:- IMPORTANT

        //  function practice (a1 , b2)
        //    {
            
        //   for(let r = Math.min(a1,b2); r <=Math.max (a1,b2); r++)
        //    {

        //    if(r % 3 === 0 && r % 5 === 0)
        //    {
        //     console.log('FizzBuzz');
        //     }

        //     else if(r % 3 === 0)
        //     {
        //     console.log('Buzz')
        //     }

        //     else if(r % 5 === 0)
        //     {
        //       console.log('Fizz')
        //     }

        //     else
        //       {
        //          console.log(r);
        //       }
        //       }
        //      }
          

        //     practice(1000,150);



            //To  check large and small value.
              //console.log(Math.max(25,35,40,80,))  // >> large value 80
              //console.log(Math.min(25,35,40,80,))  // >> samll value 25

// ----------------------------------------------------------------------------------------------

     // eaxample - 5  

   function fizzbuzz(q1 , r1)
   {
    for(let i = q1; i <= r1; i++)
    {
         if(q1 % 5 === 0)
         {
          console.log("Buzz");
         }   

         else if(r1 % 3 === 0)
         {
          console.log('Fizz')
         }

         else if(q1 % 5 === 0 || r1 % 3 === 0)
         {
          console.log('FizzBuzz')
         }

         else
         {
          console.log(i);
         }
    }

   }
 
   fizzbuzz(1,50)
// -----------------------------------------------------------------------------
  
// example - 6

function data (fizz,fizz01)
{
    for(let i=Math.min(fizz,fizz01);i<=Math.max(fizz,fizz01);i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log(`Fizzbuzz`)
        }
        else if(i % 5 === 0)
        {
            console.log(`BUZZ`)
        }
        else if(i % 3 === 0)
        {
            console.log(`Fizz`)
        }
      
      else
       {
            console.log(i)
       }
    }
}

data(1,50)

