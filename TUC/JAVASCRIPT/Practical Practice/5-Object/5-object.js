//alert('hello javascript')


        // object>> where we can store multiple data,in the form of key and value seprated by :

      var person=
	  {
		  fname : "Mateen",
		  lname : "Ataar",
		  email : "Mateen@gmail.com",
		  contact : 8390078948,
		  gender : "Male"
	  };
	  console.log(person);
	  console.log(typeof person);
	  /* console.log(person.email);
	  console.log(person.fname);
	  console.log(person.lname);
	  console.log(person.contact);
	   */
	  /*  var getEmail = person.email;
	  console.log(getEmail)
	  var getContact = person.contact;
	  console.log(person.contact)  */
	  
	  
/* 	  to change value of object */
        person.contact = 7058804143;
		console.log(person);
		
		person.nativeplace = "Mumbai";
		console.log(person);
		
		console.log( person.gender);
		
		delete person.gender;
		console.log(person);
		
		