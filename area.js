const sideInput = document.querySelectorAll(".side-input");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");


function calculateArea(){
    var base = Number(sideInput[0].value);
    var height = Number(sideInput[1].value);

    output.innerText = "Area Of Triangle is:" + (base*height)/2 + " m²";
}

btn.addEventListener("click", calculateArea);