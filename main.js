const sevenBtn = document.querySelector ("#seven");
const eightBtn = document.querySelector ("#eigt");
let buttons = document.querySelectorAll (".squares");

for (let i= 0; i < btnList.length; i++) {
    let btn = btnList [i];

    btn.addEventListener("click", function() {
        console.log ("You clicked button number " + i);
    });
}