//close
const close = document.getElementById("close");
//open
const open = document.getElementById("open");
//modal
const modal = document.getElementById("modal");

open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) => {
    e.target === modal ? modal.classList.remove("show-modal") : false;
});