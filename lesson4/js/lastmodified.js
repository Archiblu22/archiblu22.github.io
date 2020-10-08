function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}

document.getElementById("lastmodified").innerHTML = document.lastModified

let d = new Date();
let year = d.getFullYear();
let currentyear = year;
document.getElementById("getFullYear").textContent = currentyear;