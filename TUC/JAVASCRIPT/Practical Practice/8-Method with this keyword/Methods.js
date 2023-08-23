//alert('hello javascript')// accessing method and property


var person =
    {
	fname:"john",
	lname:"doe",
    age:53,
	nativeplace:"pune",
	fullName:function()
	{
	  console.log(this,"This is inside person");
	  return  person.fname + " " + person.lname
	},
	
	child:
	{
	fname:"may",
	lname:"doe",
    age:23,
	nativeplace:"mumbai",
	fullName:function()	
	{
	  console.log(this, "This is inside child");
	  return person.child.fname + " " + person.child.lname
	},
	
	grandChild:
	{
    fname:"july",
	lname:"doe",
    age:5,
	nativeplace:"mumbai",
	fullName:function()	
	{
		console.log(this, "This is inside grandChild");
		return  person.child.grandChild.fname + "  " + person.child.grandChild.lname
		
	}
	}
	}
	}
	console.log(person.fullName());
	console.log(person.child.fullName());
	console.log(person.child.grandChild.fullName());


