function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short
const datefield = document.querySelector("date");

datefield.textContent = fulldate;

document.getElementById("lastmodified").innerHTML = document.lastModified