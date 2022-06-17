import navbar from "./components/navbar.js";

let header = document.getElementById("header");

header.innerHTML = navbar();
let select = document.querySelector(".bucketIconDiv");
select.addEventListener("click", move);
function move() {
    window.location = "cart.html";
}