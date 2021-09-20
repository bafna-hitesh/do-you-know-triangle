const angleInputs = document.querySelectorAll(".angle-input");
const enterButton = document.querySelector("#enter-btn");
const output = document.querySelector("#output");

enterButton.addEventListener("click", isTriangle);

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}


function isTriangle() {
    var sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
    console.log(sumOfAngles);
    if (sumOfAngles === 180) {
        output.innerText = "its a triangle";
    } else {
        output.innerText = "its not right triangle!";
    }
}

