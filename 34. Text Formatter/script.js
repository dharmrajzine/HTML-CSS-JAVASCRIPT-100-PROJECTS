//inputFiled
const inputFiled = document.getElementById("input-field");
//outputField
const outputField = document.getElementById("output-field");
//button
const buttons = document.querySelectorAll("button");
// console.log(inputFiled);
// console.log(outputField);
// console.log(buttons);

inputFiled.addEventListener("keyup", () =>
    // console.log("hello");
    (outputField.innerHTML = inputFiled.value)
);
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("uppercase")) {
            outputField.innerHTML = outputField.innerHTML.toUpperCase();
        } else if (btn.classList.contains("lowercase")) {
            outputField.innerHTML = outputField.innerHTML.toLowerCase();
        } else if (btn.classList.contains("capitalize")) {
            outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase();
        } else if (btn.classList.contains("bold")) {
            outputField.style.fontWeight = "900";
        } else if (btn.classList.contains("italic")) {
            outputField.style.fontStyle = "italic";
        } else if (btn.classList.contains("underline")) {
            outputField.style.textDecoration = "underline";
        }
    });
});