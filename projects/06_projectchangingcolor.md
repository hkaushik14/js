# Guess number

## Project L:ink

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ntvat3wy?file=6-unlimitedColors%2Fchaiaurcode.js)

``` javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(chagebgColor, 1000);
  }

  function chagebgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```

