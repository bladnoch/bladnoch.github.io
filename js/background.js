/**
 * background.js : show background on website
 * @author DoungukKim
 * @since 7/21/2023
 * @version v0.0.1
 */

const img=[
    "01.png",
    "02.jpeg",
    "03.jpeg",
    "04.png",
    "05.jpeg",
    "06.jpeg",
    "07.png",
    "08.png",
]

const chosenImages =img[Math.floor(Math.random()*img.length)];

const bgImage=document.createElement("img");

bgImage.src=`image/${chosenImages}`;

bgImage.classList.add("background-image");

document.body.appendChild(bgImage);

console.log(bgImage);