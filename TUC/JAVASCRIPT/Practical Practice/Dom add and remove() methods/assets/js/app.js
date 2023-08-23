// Actually we have 4 methods to adding the content in an element

let data = document.getElementById('imp01');

let data01 = document.createElement('li');

data01.className='list-group-item';

let conten =document.createTextNode('Languages')
data01.style.color ='purple', data01.style.fontSize ='30px',data01.style.textAlign ='center';
data01.append(conten) // Here append method is used to insert the content at the end of selected element.


imp01.prepend(data01) // here prepend method is used to insert the content at the start of selected element. 




let heading =document.createElement('h1')
//  heading.className='list-group-item'
let conten01 = document.createTextNode('Practice Practice');
heading.style.textAlign ='center';
heading.append(conten01);
imp01.before(heading); //here before method is used to insert an element with its content before the selected element.

    


let para = document.createElement('p')
 para.className ='alert alert-info';
 para.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.`
 imp01.after(para) // here after method is used to insert an element with its content after the slected element.


