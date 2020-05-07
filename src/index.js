import * as stack from "./stack.js";

window.onload = () => {
  console.log("done");

  let pop = document.getElementById("pop");
  let push = document.getElementById("push");
  let peek = document.getElementById("peek");
  let display = document.getElementById("top_of_stack");

  pop.addEventListener("click", function () {
    let text = `Removed ${stack.pop()}`;
    alert(text);
  });

  push.addEventListener("click", function () {
    let x = prompt("What should we add to the stack?");
    stack.push(x);
    display.innerHTML = x;
  });

  peek.addEventListener("click", function () {
    display.innerHTML = stack.peek();
  });
};
