const ratingElements = document.querySelectorAll(".rating");
const btnElement = document.getElementById("btn");

const containerElement = document.getElementById("container");
let selectedRating = "";

ratingElements.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = 
        event.target.innerText || event.target.parentNode.innerText; 
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnElement.addEventListener("click",()=> {
    if(selectedRating !== ""){
        containerElement.innerHTML = `
        <strong> Thank you!</strong>
        <br><br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})
function removeActive(){
    ratingElements.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}