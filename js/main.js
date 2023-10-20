var elButton = document.querySelector(".btn");
var elButtonOptions = document.querySelector(".btn__options");
var elButtonExit = document.querySelector(".btn__exit");
var elDiv = document.querySelector(".nav__div");

elButton.addEventListener("click", () => {
    elButtonOptions.classList.toggle("Options")
    elButtonExit.classList.toggle("Exit")
    elDiv.classList.toggle("nav__block")
} )