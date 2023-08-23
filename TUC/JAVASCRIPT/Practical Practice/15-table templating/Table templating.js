//alert('hello javascript')

var cl= console.log;


var History = [
 {
	fname: "Harsha",
	lname: "Sawarkar",
	profile: "Software engineer"  ,
	email : "Harsha@gmail.com",
	
 },


 {
	fname: "Tasnim ",
	lname: "Mirza",
	profile:"Badminton topper",
	email : "Tasnim@gmail.com",
 },

 {
	fname: "Lata",
	lname: "Mangeshkar",
	profile:"Top Indian Singer",
	email : "Lata@gamil.com",
 },


 {
	fname: "Radhakrishnan",
	lname: "Venkatraman",
	profile:"Scientist",
	email : "venkat@gamil.com",
	
 },
 
 {
	fname: "Lala Amarnath",
	lname: "Bharadwaj",
	profile:"Indian cricketer",
	email : "Amarnath@gamil.com",
	
 },
 
 {
	fname: "Dharmendra",
	lname: "Pradhan",
	profile:"Education Minister",
	email : "Dharmendra@gamil.com",
	
 },
 
 ];


 
	
 	var result =" ";
	
	var data = document.getElementById("info"); 
		
	for(let b = 0; b < History.length; b++)
		
 {
			
			
			result += "<tr>";
			result += "<td>" + (b + 1) + "</td>";
			result += "<td>" + History[b].fname + "</td>";
			result += "<td>" + History[b].lname + "</td>";
			result += "<td>" + History[b].profile + "</td>";
			result += "<td>" + History[b].email + "</td>";
			result += "</tr>";
  }
        
      
		data.innerHTML = result;	
	
 
	
	
