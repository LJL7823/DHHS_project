let colorImage = document.getElementById("image");

const before = [
  "images/colorblind_images_buttons/standard.png",
  "images/colorblind_images_buttons/standard.png",
  "images/colorblind_images_buttons/standard.png",
  "images/colorblind_images_buttons/standard.png",
  "images/graphs/graphStandard.png",
  "images/graphs/graphStandard.png",
  "images/graphs/graphStandard.png",
  "images/graphs/graphStandard.png",
  "images/model/partStandard.png",
  "images/model/partStandard.png",
  "images/model/partStandard.png",
  "images/model/partStandard.png",
];
const after = [
  "images/colorblind_images_buttons/deuteranomaly.png",
  "images/colorblind_images_buttons/protanopia.png",
  "images/colorblind_images_buttons/tritanopia.png",
  "images/colorblind_images_buttons/achromoplastia.png",
  "images/graphs/graphDeuteranomaly.png",
  "images/graphs/graphProtanopia.png",
  "images/graphs/graphTritanopia.png",
  "images/graphs/graphAchromatopsia.png",
  "images/model/partDeuteranomaly.png",
  "images/model/partProtanopia.png",
  "images/model/partTritanopia.png",
  "images/model/partAchromatopsia.png",
];

for (let x = 1; x <= 12; x++) {
  let button = document.getElementById(`button${x}`);
  let colorImage = document.getElementById(`image${x}`);
  console.log(`image${x}`);
  colorImage.setAttribute("src", before[x - 1]);
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
