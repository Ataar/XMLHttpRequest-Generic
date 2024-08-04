let cl = console.log;


let userForm = document.getElementById('userForm')

let userInfo = document.getElementById('userInfo')

let firstControl = document.getElementById('firstName')

let lnameControl = document.getElementById('lastName')

let emailControl = document.getElementById('email')

let contactControl = document.getElementById('contact')

let sBtn = document.getElementById('sBtn')

let uBtn = document.getElementById('uBtn')


let userArr = [
   
]


const create = (eve) => {

    eve.preventDefault();

    cl('Submited')

    let getNewObj =   // get the values from input controls
    {
        fname : firstControl.value,  
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value,
        userId : generateUUID()
    }

     userArr.push(getNewObj)
     localStorage.setItem('addUser',JSON.stringify(userArr))
     eve.target.reset()
    temp(userArr)
}


function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (crypto.getRandomValues(new Uint8Array(1))[0] & 0xf) >> (c === 'x' ? 0 : 1);
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

    // ############################################################################################################
  





const temp = (arr)=>{
    let result = ``;
    arr.forEach((add,i)=>{
        result+=`
        
                 <tr id='${add.userId}'>
                 
                 <td>${i+1}</td>
                 <td>${add.fname}</td> 
                 <td>${add.lname}</td>
                 <td>${add.email}</td>
                 <td>${add.contact}</td>
                 <td>
                  <button class="btn btn-primary" onclick = 'onEdit(this)'>Edit</button>  
                  
                  </td>
                  
                  <td>
                  <button class="btn btn-danger" onclick = 'onDelete(this)'>Delete</button>  
                  
                 </td>
                
                 </tr>
            
            `
        })
        userInfo.innerHTML = result;
    } 
    // if(localStorage.getItem('addUser'))
    // {
    //     userArr = JSON.parse(localStorage.getItem('addUser'))
    // }
      
    //  userArr = JSON.parse(localStorage.getItem('addUser')|| [])  // if the data in localstorage so get it and store into userArr if not so store the empty data in userArr.

    temp(userArr)







    // ############################################################################################################


  const onEdit = (ele)=>{
    cl(ele)
    
    let getEditId = ele.closest('tr').id
    cl(getEditId)
    
    localStorage.setItem('editId',getEditId)
    
    let getEditObj = userArr.find(add=>add.userId===getEditId)
    cl(getEditObj)


    sBtn.classList.add('d-none')
    uBtn.classList.remove('d-none')

    firstControl.value = getEditObj.fname;  // take fname from getEditObj and patch in firstControl.value
    lnameControl.value = getEditObj.lname;  // take lname from getEditObj and patch in lnameControl.value
    emailControl.value = getEditObj.email;  //  email
    contactControl.value = getEditObj.contact  // contact
  }
     




    // ############################################################################################################



    let onUpdate = ()=>{
      // cl('Updated')
      let getId = localStorage.getItem('editId')
      cl(getId)  
      
      userArr.forEach(add=>{
        if(add.userId===getId)
        {
            add.fname = firstControl.value,
            add.lname = lnameControl.value,
            add.email = emailControl.value,
            add.contact = contactControl.value
        }
      })

        localStorage.setItem('addUser',JSON.stringify(userArr))
        
        let getTr = [...document.getElementById(getId).children]
        cl(getTr)

        getTr[1] = firstControl.value;
        getTr[2] = lnameControl.value;
        getTr[3] = emailControl.value;
        getTr[4] = contact.value

        userForm.reset();

        sBtn.classList.add('d-none');
        uBtn.classList.remove('d-none');

        temp(userArr)
    }



    // ############################################################################################################



    const onDelete = (ele) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success ml-3",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
    
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it !",
        cancelButtonText: "No, cancel !",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          let getDelId = ele.closest('tr').id;
          console.log(getDelId);  // Use console.log instead of cl if cl is not defined
          let delObj = userArr.findIndex(add => add.userId === getDelId);
          console.log(delObj);  // Use console.log instead of cl if cl is not defined
    
          userArr.splice(delObj, 1);
          localStorage.setItem('addUser', JSON.stringify(userArr));
    
          document.getElementById(getDelId).remove();
    
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your data has been deleted.",
            icon: "success",
            timer:2000
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Activity Cancelled",
            text: "Your important data is safe..",
            timer:2000,
            icon: "error"
          });
        }
      });
    }
    

userForm.addEventListener('submit',create)
uBtn.addEventListener('click',onUpdate)