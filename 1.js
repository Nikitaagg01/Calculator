let display = document.getElementById("Display");
let buttons = document.querySelectorAll(".button");

let currentValue = "";

buttons.forEach(button => {
  button.addEventListener("click", function () {
    let value = this.innerText;

    // Handle special buttons
    if (value === "C" || value === "CE") {
      currentValue = "";
    } else if (value === "=") {
      try {
        currentValue = eval(currentValue).toString();
      } catch (error) {
        currentValue = "Error";
      }
    } else if (value === "←" || this.innerHTML.includes("fa-delete-left")) {
      currentValue = currentValue.slice(0, -1);
    } else {
      currentValue += value;
    }

    display.value = currentValue;
  });
});
