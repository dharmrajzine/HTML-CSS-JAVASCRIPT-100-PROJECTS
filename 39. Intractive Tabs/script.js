function getTab(el) {
    //active
    const active = document.querySelector(".active");
    //visible
    const visible = document.querySelector(".content-visible");
    //tabContent
    const tabContent = document.getElementById(el.href.split("#")[1]);

    active.classList.toggle("active");
    visible.classList.toggle("content-visible");

    el.classList.add("active");
    tabContent.classList.add("content-visible");
}
document.addEventListener("click", (e) => {
    if (e.target.matches(".tab-item a")) {
        getTab(e.target);
    }
});