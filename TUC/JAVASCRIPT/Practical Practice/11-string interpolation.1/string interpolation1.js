//alert('javascript')

                        // string inter using varaible declaration

let fname ="Eknath Sambhaji";
let lname ="Shinde";
let dob = '9 February 1964';
let residance ="Mumbai";
let person ="Indian politician";
let post ="chief ministers of Maharashtra";
let date = 20;

//Eknath Sambhaji Shinde (pronunciation: [eknaːt̪ʰ ʃin̪d̪e]; born 9 February 1964[2]) is an Indian politician currently serving as the 20th and current Chief Minister of Maharashtra since 30 June 2022. 

/* var result = "<b>" + fname + " " + lname + "</b>" + " born on " + dob + " is an " + person + " currently serving as the 20th and current " + post + " since " + date + "th June 2022";
 */
 
 var result= `<b> ${fname} ${lname} </b> born on ${dob} is an ${person} currently serving as the 20th and current ${post} since ${date}th June 2022`;

var data = document.getElementById("para");
data.innerHTML = result;


 //Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington, United States.Microsoft was founded by Bill Gates.
let company = 'Microsoft Corporation ' ;
let residancy = 'American';
let head =  'multinational technology corporation headquartered ';
let country = 'United States';
let founder = 'Bill Gates.';

var result = " The " + company + "is an " + residancy + head + 'in Redmond, Washington ' + 
country +  '. Microsoft was founded by ' + '<b>' + founder + '</b>'; 

var data1 = document.getElementById("para1");
data1.innerHTML = result;



//Savitribai Phule was an Indian social reformer, educationalist, and poet from Maharashtra. Along with her husband, Mahatma Jyotiba Phule in Maharashtra.

let name = 'Savitribai';
let sName = " Phule ";
let profile = " Indian social reformer, ";
let state = " Maharashtra ";
let perSon = 'Mahatma Jyotiba Phule in Maharashtra.';

var result = "<b>" + name + sName + '</b>' + ' was an ' + profile + ' educationalist and poet from ' 
+ state + ' with her hasband, ' + '<b>' + perSon + '</b>';

var data2 = document.getElementById('para2');
data2.innerHTML = result;

/* ----------------------------------------------------------------------------- */

// Hi, I'm suresh kulkarni from Nilanga. I'm a head of computer science Department of Ravindernath tagor college. i want to inform you that addmissions are going to start from 15th March for Bcs, MCA ,Bsc computer ,Msc. if you are intersted contact me.[7058804143]

let Name = 'Suresh';
let snaMe = ' Kulkarni';
let city = 'Nilanga';
let proFile = 'head of computer science Department';
let college = 'Ravindernath tagor college';
let Date = '15th March';
let cources = 'Bcs, Mca ,Bsc computer ,Msc.';
let contact = "[ 7058804143 ]";

var result = ` Hi, I'm ${Name} ${snaMe} from ${city}. I'm a ${proFile} of ${college}
. i want to inform you that addmissions are going to start from ${Date} for <u><b> ${cources}</b></u>
if you are intersted contact me. <b>${contact}</b>`;


var data3 =document.getElementById('para3');
data3.innerHTML = result;

/* -------------------------------------------------------------------------------- */


                             //Stirng inter uing Object
							 
	// Arman Malik is the best football coach who gives the advices to our fotball team
    // that how to play the football with oppposite team. here is the list of team members.   						 
   
   
   
  var player=
  {
	   trainer: "Arman Malik",
	   game : "Football",
	   whom : 'Football Team',
	   beat: 'Oppposite Team',
	   Members: 'Akash, Rohan, Tiger, Sandeep etc.'
  }
    
	var result = `<b> ${player.trainer} </b> is the best ${player.game} coach who gives the advices to our ${player.whom} that how to play the football with ${player.beat} here is the list of team members ${player.Members}`;
 
var data4 = document.getElementById('para4');
data4.innerHTML = result;