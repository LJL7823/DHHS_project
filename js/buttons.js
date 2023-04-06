let colorImage = document.getElementById("first");
let button1 = document.getElementById("button1");
colorImage.setAttribute("src", "../images/first.jpg");
async function changeMono() {
  colorImage.style.opacity = 0;
  await new Promise((r) => setTimeout(r, 1000));
  if (colorImage.getAttribute("src") === "../images/first.jpg") {
    colorImage.setAttribute("src", "../images/download.png");
  } else {
    colorImage.setAttribute("src", "../images/first.jpg");
  }
  colorImage.style.opacity = 1;
}

button1.addEventListener("click", changeMono);
