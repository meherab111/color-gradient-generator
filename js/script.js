let button1 = document.getElementById("btn-1");

let button2 = document.getElementById("btn-2");

let divInfo = document.querySelector(".bg-img--body");

let color1 = "#13678a";

let color2 = "#dafdba";

// Color Code Functionality

const funcHexValue = () => {
  let hexValue = "0123456789abcdef";
  let colors = "#";

  for (let i = 0; i < 6; i++) {
    colors = colors + hexValue[Math.floor(Math.random() * 16)];
  }

  return colors;
};

// Color Code Button 1 Functionality

const button1Event = () => {
  color1 = funcHexValue();

  button1.innerHTML = color1;

  divInfo.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2});`;

  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
};

// Color Code Button 2 Functionality

const button2Event = () => {
  color2 = funcHexValue();

  button2.innerHTML = color2;

  divInfo.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2});`;

  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
};

// Button 1 Click
button1.addEventListener("click", button1Event);

// Button 2 click
button2.addEventListener("click", button2Event);

// Copy Code Click
divInfo.addEventListener("click", () => {
  navigator.clipboard.writeText(divInfo.textContent.trim());
  alert("Gradient Code Copied Successfully");
});
