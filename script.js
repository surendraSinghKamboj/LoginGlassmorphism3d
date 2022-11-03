let box = document.getElementById("box");
let offset = box.getBoundingClientRect();
let topOffset = offset.top;
let bottom = offset.bottom;
let left = offset.left;
let right = offset.right;

document.onmousemove = (event) => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  if (mouseY < topOffset && mouseX < left) {
    box.style.transform = "skew(2deg)";
  } else if (
    mouseX > left &&
    mouseX < right &&
    mouseY > topOffset &&
    mouseY < bottom
  ) {
    box.style.transform = "skew(0deg)";
  }else if(mouseX>right&&mouseY>bottom){
    box.style.transform="skew(-5deg)"
  }
};

