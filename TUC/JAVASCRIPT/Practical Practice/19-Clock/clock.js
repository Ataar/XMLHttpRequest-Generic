 //let console = console.log;


let dclock = document.getElementById('digitalClock');


function craeatDC()
{
let c = new Date();

let hr = c.getHours();

let min = c.getMinutes();

let sec = c.getSeconds();

let session = 'AM';


if (hr >= 12)
{
session = 'PM';
}

if (hr > 12 )
{
  hr = hr-12
}

if (hr < 12 )
{
 hr = '0' +  hr
}

if (min < 10 )
{
    min = '0' + min
}

if (sec < 10 )
{
    sec = '0' + sec
} 

let result = `${hr}: ${min}: ${sec} ${session}`;
digitalClock.innerHTML = result;
// console.log(hr,min,sec);
setTimeout(craeatDC);

}

craeatDC();
