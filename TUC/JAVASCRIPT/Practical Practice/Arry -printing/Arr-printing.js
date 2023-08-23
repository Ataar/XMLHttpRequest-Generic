

let person = [
    {
      fname:"Sachin",
      lname:"M.D",
      age:12,
      email:"Sachin@gmail.com"
    },

    {
        fname:"Tushar",
        lname:"V.R",
        age: 18,
        email:"Tushar@gamil.com"
  
      },

      {
        fname:"Akash",
        lname:"D.K",
        age: 20,
        email: "Akash@gamil.com",
  
      },
];

// --------------------------------------------------------------------------//
//  for(let i=0; i<person.length; i++)
//  {
//     console.log(person[i].fname+ " " + person[i].lname)
//  } 

//  console.log(person);
// console.log(person[1]);
// console.log(person[1].fname)
// ---------------------------------------------------------------------------
//      let text = document.getElementById('data');
// //   console.log(text);

//      let tara = " ";
//      for(let i = 0; i < person.length; i++)
//      {
//      tara +="<tr> <td>" + (i+1) + "</td> <td>" + person[i].fname + 
//      "</td> <td>" + person[i].lname + "</td>  <td>" + person[i].age
//     +"</td> <td>" + person[i].email +"</td></tr>";

//      console.log(tara);
//      }
   
//      text.innerHTML= tara;

 //-----------------------------------------------------------------------//

  let text = document.getElementById('data');

 var tara = ' ';

  for(let i = 0; i < person.length; i++)
  {
   tara+= "<tr>";
   tara+= "<td>"+(i+1)+"</td>";
  tara+= "<td>"+person[i].fname+"</td>";
   tara+= "<td>"+person[i].lname+"</td>"; 
   tara+= "<td>"+person[i].age+"</td>";
   tara+= "<td>"+person[i].email+"</td>"; 
   tara+= "</tr>";
  
}
  text.innerHTML = tara;