const nameInput = document.getElementById("nameInput");
const titleInput = document.getElementById("titleInput");
const nameText = document.getElementById("nameText");
const titleText = document.getElementById("titleText");

const nameSize = document.getElementById("nameSize");
const titleSize = document.getElementById("titleSize");

const textColor = document.getElementById("textColor");

const nameFont = document.getElementById("nameFont");
const titleFont = document.getElementById("titleFont");

nameInput.addEventListener("input", () => {
  nameText.textContent = nameInput.value || "اسم الموظف";
});

titleInput.addEventListener("input", () => {
  titleText.textContent = titleInput.value;
});

nameSize.addEventListener("input", () => {
  nameText.style.fontSize = nameSize.value + "px";
});

titleSize.addEventListener("input", () => {
  titleText.style.fontSize = titleSize.value + "px";
});

textColor.addEventListener("change", () => {
  nameText.style.color = textColor.value;
  titleText.style.color = textColor.value;
});

nameFont.addEventListener("change", () => {
  nameText.style.fontFamily = nameFont.value;
});

titleFont.addEventListener("change", () => {
  titleText.style.fontFamily = titleFont.value;
});

function downloadCard() {
  html2canvas(document.getElementById("card"), {
    useCORS: true,
    scale: 3
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "autoworld-greeting-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}