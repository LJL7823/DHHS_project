let colorImage = document.getElementById("image");
let button1 = document.getElementById("button1");

const before = [
  "../images/first.jpg",
  "../images/first.jpg",
  "../images/first.jpg",
  "../images/first.jpg",
  "../images/first.jpg",
];
const after = [
  "../images/download.png",
  "../images/download.png",
  "../images/download.png",
  "../images/download.png",
  "../images/download.png",
];

for (let x = 1; x <= 4; x++) {
  let button = document.getElementById(`button${x}`);
  let colorImage = document.getElementById(`image${x}`);
  console.log(`image${x}`);
  colorImage.setAttribute("src", before[x]);
  async function onClickAnimation() {
    colorImage.style.opacity = 0;
    await new Promise((r) => setTimeout(r, 1000));
    if (colorImage.getAttribute("src") === before[x - 1]) {
      colorImage.setAttribute("src", after[x - 1]);
    } else {
      colorImage.setAttribute("src", before[x - 1]);
    }
    colorImage.style.opacity = 1;
  }
  button.addEventListener("click", onClickAnimation);
}
