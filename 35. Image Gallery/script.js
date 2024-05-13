//images
let images = document.querySelectorAll("img");
//wrapper
let wrapper = document.getElementById("wrapper");
//imgWrapper
let imgWrapper = document.getElementById("fullImg");
//close
let close = document.querySelector("span");

// console.log(images);
// console.log(wrapper);
// console.log(imgWrapper);
// console.log(close);

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`images/img${index}.jpg`);
    });
});

//close button
close.addEventListener("click", () => (wrapper.style.display = "none"));

//openImage
function openModal(pic) {
    wrapper.style.display = "flex";
    imgWrapper.src = pic;
}