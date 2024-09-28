// const btn = document.querySelector("#btn");
// const item = document.querySelector("input");
// const list = document.querySelector("ul");
  
// btn.addEventListener("click" ,() =>{
//   const txt = item.value;
//   item.value = '';

//   const listItem = document.createElement("li");
//   const listTxt = document.createElement("span");
//   const listButton = document.createElement("button");

//   listItem.appendChild(listTxt);
//   listTxt.textContent = txt;
//   listItem.appendChild(listButton);
//   listButton.textContent = "delete";
//   list.appendChild(listItem);

//   listButton.addEventListener("click",()=>{
//     list.removeChild(listItem);
//   })

//   item.focus();
// });

// btn.addEventListener("mouseenter",()=>{
//   list.style.backgroundColor = blue;
// });

// const drawingArea = document.querySelector(".scratchPad");
// const details = document.querySelector(".details");
// const gridSizeInput = details.querySelector("input");

// gridSizeInput.addEventListener("change", () => {
//   const gridSize = parseInt(gridSizeInput.value);

//   if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
//     alert("Please enter a number between 1 and 100");
//     return;
//   }

//   drawingArea.innerHTML = ''; // Clear previous grid
//   drawingArea.style.width = "1000px";
//   drawingArea.style.height = "1000px";
//   drawingArea.style.display = "flex";
//   drawingArea.style.flexWrap = "wrap";

//   const drawingAreaWidth =  parseInt(drawingArea.clientWidth);
//   const drawingAreaHeight = parseInt(drawingArea.clientHeight);

//   for (let i = 0; i < gridSize * gridSize; i++) {
//     const box = document.createElement("div");
//     box.className = `box${i}`;
//     const boxSize = drawingAreaWidth / gridSize;
//     box.style.width = `${boxSize}px`;
//     box.style.height = `${boxSize}px`;
//     box.style.flex = `0 0 ${boxSize}px`;
//     box.style.margin = "0"; // Eliminate space between boxes
//     box.style.padding = "0"; // Eliminate padding if any
//     box.style.border = "none"; // Ensure no border
//     drawingArea.appendChild(box);
//     // drawingArea.insertAdjacentElement('beforeend', box);

//     box.addEventListener("mouseenter", () => {
//       box.style.backgroundColor = "yellow";
//     });
//   }
// });



const drawingArea = document.querySelector(".scratchPad");
const details = document.querySelector(".details");
const gridSizeInput = details.querySelector("input");
const rainbowButton = document.getElementById("rainbowButton"); // Get the rainbow button
const favColor = document.getElementById("favcolor"); // Get the favorite color input
let rainbowMode = false;

// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

gridSizeInput.addEventListener("change", () => {
  const gridSize = parseInt(gridSizeInput.value);

  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  drawingArea.innerHTML = ''; // Clear previous grid
  drawingArea.style.width = "1000px";
  drawingArea.style.height = "1000px";
  drawingArea.style.display = "flex";
  drawingArea.style.flexWrap = "wrap";

  const boxSize = 1000 / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement("div");
    box.className = `box${i}`;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.flex = `0 0 ${boxSize}px`;
    box.style.margin = "0";
    box.style.padding = "0";
    box.style.border = "1px solid black"; 
    box.style.boxSizing = "border-box"; // Ensure no overflow
    drawingArea.appendChild(box);

    box.addEventListener("mouseenter", () => {
      if (rainbowMode) {
        box.style.backgroundColor = getRandomColor(); // Random color in rainbow mode
      } else {
        box.style.backgroundColor = favColor.value; // Fixed color when not in rainbow mode
      }
    });
  }
});

rainbowButton.addEventListener("click", () => {
  rainbowMode = !rainbowMode; // Toggle rainbow mode on or off
  rainbowButton.textContent = rainbowMode ? "Disable Rainbow" : "Rainbow"; // Update button text
});