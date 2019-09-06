 let myBlock;

 document.addEventListener("DOMContentLoaded", function () {

     myBlock = document.createElement("div");
     myBlock.textContent = "hello world";
     myBlock.style.width = "100px";
     myBlock.style.height = "100px";
     myBlock.style.backgroundColor = "red";
     myBlock.style.color = "white";
     myBlock.style.lineHeight = "100px";
     myBlock.style.textAlign = "center";
     myBlock.style.position = "absolute";
     myBlock.style.top = "100px";
     myBlock.style.left = "150px";

     document.body.appendChild(myBlock);
 })

 document.addEventListener("keydown", function (e) {
     e.preventDefault();

     let keyC = e.keyCode;

     if (keyC === 37) {
         goLeft();
     } else if (keyC === 39) {
         goRight();
     } else if (keyC === 38) {
         goUp();
     } else if (keyC === 40) {
         goDown();
     } else if (keyC === 67) {
         myBlock.style.backgroundColor = randomColor();
     }
     console.log(e.keyCode);
 })

 function randomColor() {
     return "#" + Math.random().toString(16).substr(-6);
 }

 function goLeft() {
     let temp = myBlock.offsetLeft;
     temp = temp - 50;
     myBlock.style.left = temp + "px";
 }

 function goRight() {
     let temp = myBlock.offsetLeft;
     temp = temp + 50;
     myBlock.style.left = temp + "px";
 }

 function goUp() {
     let temp = myBlock.offsetTop;
     temp = temp - 50;
     myBlock.style.top = temp + "px";
 }

 function goDown() {
     let temp = myBlock.offsetTop;
     temp = temp + 50;
     myBlock.style.top = temp + "px";
 }