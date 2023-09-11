const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date();
let day = weekday[date.getDay()];

document.getElementById("date").innerHTML = day


setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
//document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`

// console.log(`${year}-${month}-${day} 
//             ${hours}:${minutes}:${seconds}.${milliseconds}`);

// const year = date.getUTCFullYear();
// const month = date.getUTCMonth() + 1;
// const day = date.getUTCDate();
// const hours = date.getUTCHours();
// const minutes = date.getUTCMinutes();
// const seconds = date.getUTCSeconds();
// const milliseconds = date.getUTCMilliseconds();


// document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`