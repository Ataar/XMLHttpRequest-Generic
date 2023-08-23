let box = document.getElementById('box01');

let onMousemove = (eve)=>{
  eve.target.style.backgroundColor =`rgb(220 ,${eve.offsetX} , ${eve.offsetY})`

}

box.addEventListener('mousemove',onMousemove)