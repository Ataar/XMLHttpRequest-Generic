let cl = console.log;

let postArr = [
    {
        title:"Angular 16",
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio sapiente exerc?'


    },

    {
    title:'E6',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio sapiente exercitationem deserunt facere maiores unde quis praesentium nulla esse?'
    },

    {
        title:'E7',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio sapiente exercitationem deserunt facere maiores unde quis praesentium nulla esse?'
    },

    {
        title:'HTML',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio sapiente exercitationem deserunt facere maiores unde quis praesentium nulla esse?'
    }
]

      let postArr01 = document.getElementById('postArr01')


        let result = '';
        for(let i = 0;i<postArr.length;i++){
            // cl(postArr[i])
        result+= `
       
        <div class="col-md-3">
        <div class="card text-center mt-5">
            <div class="card-header">
                <h2 class="mb-0">${postArr[i].title}</h2>
            </div>
            <div class="card-body">
                <p class="mb-4 font-weight-bold">${postArr[i].content}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-primary">Edit</button>
            </div>
        </div>
    </div>
      
        
        `
        postArr01.innerHTML = result
    }
    
    
    
    
    



