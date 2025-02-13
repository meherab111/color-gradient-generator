let button1 = document.getElementById("btn-1");

let button2 = document.getElementById("btn-2");

let divInfo = document.querySelector(".bck-img-body");

let color1 = "#34208d";

let color2 = "#613f5d"

const funcHexValue = () => {
    let hexValue = "0123456789abcdef";
    let colors = "#";

    for (let i = 0; i < 6; i++) {

        colors = colors + hexValue[Math.floor(Math.random() * 16)];

    }

    return colors;

}



const button1Event = () => {

    color1 = funcHexValue();

    button1.innerHTML = color1;

    divInfo.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2});`;

    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;

}

const button2Event = () => {

    color2 = funcHexValue();

    button2.innerHTML = color2;

    divInfo.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2});`;

    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
}


button1.addEventListener("click", button1Event);

button2.addEventListener("click", button2Event);

divInfo.addEventListener("click", () => {

    navigator.clipboard.writeText(divInfo.textContent.trim());
    alert("Gradient Code Copied Successfully");

});