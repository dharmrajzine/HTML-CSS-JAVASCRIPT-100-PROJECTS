//countEl
let countEl = document.getElementById("count");
//saveEl
let saveEl = document.getElementById("save");
//incrementBtn
let incrementBtn = document.querySelector(".increment-btn");
//saveBtn
let saveBtn = document.querySelector(".save-btn");
let count = 0;

incrementBtn.addEventListener("click", () => {
    count += 1;
    countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
    let countStr = count + ", ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
});