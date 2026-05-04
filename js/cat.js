/* created by jereconjota*/

let startTime = new Date().getTime();
console.log(window.screen.width);
let walkTheCat = function () {
  let catEl = document.getElementById("cat");
  let currTime = new Date().getTime();
  let newRight = ((currTime - startTime) / 1000) * 100;
  catEl.style.right = newRight + "px";

  if (newRight < window.screen.width) {
    window.requestAnimationFrame(walkTheCat);
  } else {
    catEl.style.right = "0px";
    startTime = new Date().getTime();
    window.requestAnimationFrame(walkTheCat);
  }
};

walkTheCat();

/* created by jereconjota*/