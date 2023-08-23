//alert('hiiii')//alert('hello javascript')

var cl= console.log;


var History = [     // Array Name
 {
	fname: "Harsha",            // It is started with 0 index and these are the properties and values. 
	lname: "Sawarkar",          
	profile: "Software engineer"  ,   // index 0
	email : "Harsha@gmail.com",
	
 },


 {
	fname: "Tasnim ",               // index 1
	lname: "Mirza",
	profile:"Badminton topper",
	email : "Tasnim@gmail.com",
 },

 {
	fname: "Lata",                    // index 2
	lname: "Mangeshkar",
	profile:"Top Indian Singer",
	email : "Lata@gamil.com",
 },


 {
	fname: "Radhakrishnan",         // index 3
	lname: "Venkatraman",
	profile:"Scientist",
	email : "venkat@gamil.com",
	
 },
 
 {
	fname: "Lala Amarnath",          // index 4
	lname: "Bharadwaj",
	profile:"Indian cricketer",
	email : "Amarnath@gamil.com",
	 
 },
 
 {
	fname: "Dharmendra",               // index 5
	lname: "Pradhan",
	profile:"Education Minister",
	email : "Dharmendra@gamil.com",
	
 },
 
 ];


 
	
 	var result =" ";
	
	var data = document.getElementById("info"); 
	//  let b = 0;	
	for(let b = 0; b < History.length; b++)
		//console.log(History[b]);
 {
			
			
			result += `<tr>
			<td> ${b+1} </td>
			<td> ${History[b].fname  } </td>
			<td> ${History[b].lname  } </td>
			<td> ${History[b].profile} </td>
			<td> ${History[b].email  } </td> 
            </tr>`
      
		info.innerHTML = result;	
	
 }
