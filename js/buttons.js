let colorImage = document.getElementById("first");
let button1 = document.getElementById("button1");

function changeMono() {
  if (colorImage.getAttribute("src") === "../images/first.jpg") {
    colorImage.setAttribute("src", "../images/download.png");
  } else {
    colorImage.setAttribute("src", "../images/first.jpg");
  }
}

button1.addEventListener("click", changeMono);
