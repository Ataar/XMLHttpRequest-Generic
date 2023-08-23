
let mytab = [...document.querySelectorAll('.mytab li')]
//   here querySelectorAll gives nodeList of an element so that we have to convert it into Array
let tabcon =[...document.querySelectorAll('.tabContent')]
let onTab = (eve)=>
{
    let data = eve.target.getAttribute('data-id');
      // here getAttribute is a method which returns the value of an element's attribute.
      console.log(data)
      
        
      tabcon.forEach(div=>div.classList.remove('active'))

      document.getElementById(data).classList.add('active'); 


      mytab.forEach(li =>li.classList.remove('active'));
      eve.target.classList.add('active')
 
}


mytab.forEach(li=>{
    // console.log(li)

    li.addEventListener('click',onTab)
    //   addEventListener ye document object par lagta hai
});


