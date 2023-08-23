
// let users = [
//   {
//     userId: 1,
//     id: 1,
//     title: "are or do repels provide blacked out except option criticizes",
//     body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect"
//   },
  

//   {
//     userId: 1,
//     it: 2,
//     title: "who is being",
//     body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
//   },

//   {
//     userId: 1,
//     it: 3,
//     title: "she repels troubles as if she were training, whoever she is",
//     body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared"
//   },

//   {
//     userId: 1,
//     it: 4,
//     title: "and he is blinded",
//     body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
//   },

  
//      {
//        userId: 1,
//        id: 5,
//        title: "they don't know what they hate",
//        body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held"
//      },
//     ] ;



//  users.forEach(function(user)
// {
//   // console.log(user);
//    //console.log(user.title,user.body);
//   //  console.log(user.body);
// })

// --------------------------------------------------------


  
// let users = [
//  { 
//   user1:" User-Rushi",
//    title: "are or do repels provide blacked out except option criticizes",
//   body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect",
// },
// {
//   user2: "User - Arvin",
//   title2: "who is being",
//   body2: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing.",
// },


// {
//   user3: "User - Rekha",
//   title3: "she repels troubles as if she were training, whoever she is",
//   body3: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared"
// },


// {
//   user4: "User - Furkhan",
//   title4: "and he is blinded",
//   body4: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
// },



// {
//   user5:"User - Ayan",
//   title5: "they don't know what they hate",
//   body5: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it helds",
//  }, 

//  {
//    user6:"User - Shailesh",
//    title6: "Lorem ipsum dolor sit",
//    body6: "Quae mollitia quia dolorum nam voluptates fugit corporis ea dolorem assumenda! Optio dolores fugit ex enim recusandae nam, iste vero atque! Est",
//   } ,
// ] ;
// --------------------------------------------------

let users = [
  { 
   user:" User-Rushi-1",
  title: "are or do repels provide blacked out except option criticizes",
   body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect because he also accepts."
  },
 {
    user:"User-Arvin-2",
    title: "who is being",
    body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
  },
   
  { 
    user:" User-Rekha-3",
    title: "she repels troubles as if she were training, whoever she is",
    body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things."
 },


 { 
  user:" User-Shivani-4",
  title: "and he is blinded",
  body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things."
},

{ 
  user:" User-Mark-5",
  title: "they don't know what they hate",
  body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it helds."
},

{ 
  user:" User-Ayan-6",
  title: "Lorem ipsum dolor sit",
  body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ex iusto. Corrupti perspiciatis iure magni delectus itaque autem deserunt modi voluptatum veritatis, atque natus dignissimos dolorum sed hic deleniti laborum."
},

];


let card1 = document.getElementById('card1')
let result = "";
users.forEach(function(add)
{

 
   result+= `
   <div class="col-md-4 mb-3">
   <div classs="card">

    <div class="card-header bg-info1 text-center ">
       <h3 class=" m-1">
           ${add.title}
       </h3>
  </div>

       <div class="card-body h5 bg-warning ">
          <p>
           ${add.body}
     </p>
     </div>

     <div class="card-footer bg-info text-center font-weight-bold h5">
    <p class= "text m-1">
           ${add.user}
    </p>
    </div>
   
   </div>
   </div> 


  `

})
 card1.innerHTML = result;

// ----------------------------------------------------------------------------------------




// let infouser =document.getElementById("data");

// let result1 ="";

// users1.forEach(function(user){
//   result1 += 
//   `<div class="col-md-3">
//   <div class="card">
//     <div class="card-header">
//       <h3>${user.title}</h3>
//     </div>
//     <div class="card-body">
//       <p>
//         ${user.body}
//       </p>
//     </div>
//     <div class="card-footer">
//       <p>
//         <span>${user.newKey} </span>	
//       </p>
//     </div>
//   </div>
// </div>
//  `
// })
// infouser.innerHTML = result1
// -------------------------------------------------------------------------------


let card6 = document.getElementById('card6')
let result2 = "";
users.forEach(function(user2)
{

result2+= `
<div class="col-md-4 mb-3">
<div classs="card">

 <div class="card-header bg-info1 text-center ">
    <h3 class=" m-1">
        ${user2.title}
    </h3>
</div>

    <div class="card-body1 h5 bg-warning " class= "memo">
       <p>
        ${user2.body}
  </p>
  </div>

  <div class="card-footer bg-info text-center1 font-weight-bold h5">
 <p class= "text m-1">
        ${user2.user}
 </p>
 </div>

</div>
</div> 


`

})
card6.innerHTML = result;