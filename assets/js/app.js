    const stdForm = document.getElementById('stdForm')
    const userContent = document.getElementById('userContent');
    const inputContent = document.getElementById('inputContent');
    // console.log(userContent)

    function Disabled()
    {
        if(userContent.value.length>0)
        {
            inputContent.disabled = false;
            
        }
        
        else
        {
            inputContent.disabled =true;
        }
       
    }
        

      let onsubmit= (eve)=>
    {
        eve.preventDefault()
        if(inputContent.value!==true){
            inputContent.value=true;
            Swal.fire({
                icon: 'success',
                title: 'Button has Enabled',
                timer: 3000
              })
             
        }
      
        
    
    else
    {
        inputContent.value=false;
        Swal.fire({
            icon: 'error',
            // title: 'Oops...',
            title:'Sorry!',
            text: 'Invalid Email or Password',
            timer: 3000		
        })
    }
  stdForm.reset()
   
}
    stdForm.addEventListener('submit',onsubmit)


    