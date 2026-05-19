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

function makeDraggable(el) {
  let isDragging = false;
  let startX, startY, startLeft, startTop;

  function startDrag(x, y) {
    isDragging = true;
    startX = x;
    startY = y;
    startLeft = el.offsetLeft;
    startTop = el.offsetTop;
  }

  function moveDrag(x, y) {
    if (!isDragging) return;

    el.style.left = startLeft + (x - startX) + "px";
    el.style.top = startTop + (y - startY) + "px";
    el.style.transform = "none";
  }

  el.addEventListener("mousedown", (e) => {
    startDrag(e.clientX, e.clientY);
  });

  document.addEventListener("mousemove", (e) => {
    moveDrag(e.clientX, e.clientY);
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  el.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  });

  document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    moveDrag(touch.clientX, touch.clientY);
  });

  document.addEventListener("touchend", () => {
    isDragging = false;
  });
}

makeDraggable(nameText);
makeDraggable(titleText);

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