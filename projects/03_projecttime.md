# Digital Clock

## Project L:ink

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ntvat3wy?file=3-DigitalClock%2Fchaiaurcode.js,3-DigitalClock%2Findex.html)

``` const clock = document.getElementById('clock');
// const clock =document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleTimeString);

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocalTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);