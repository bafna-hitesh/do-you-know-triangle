const sideInput = document.querySelectorAll(".side-input");
const btn = document.querySelector("#btn");
const output = document.querySelector(".output");

btn.addEventListener("click", calculateHypotenuse);

function calculateSumOfSqure(a,b){

    const sumOfSqure = a*a + b*b;
    return sumOfSqure;
}

function calculateHypotenuse(){
    
   const sumOfSqure = calculateSumOfSqure(Number(sideInput[0].value),Number(sideInput[1].value));
   const squreRoot = "The Length Of hypotenuse is:" + Math.sqrt(sumOfSqure);
   output.innerText = squreRoot + " unit.";

}

