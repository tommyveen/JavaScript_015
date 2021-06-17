mybutton.addEventListener('click', changeText);

function changeText () {
    mybutton.textContent = "Clicked!";
}

const body = document.querySelector(".blue-background")

mybutton2.addEventListener('click', toggleBackground);

function changeBackground () {
    body.classList.remove("blue-background");
    body.classList.add("red-background")
};

function toggleBackground () {
    body.classList.toggle("red-background")
};
