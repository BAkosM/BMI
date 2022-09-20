function szamit(){
    let cm = parseFloat(document.getElementById("mag").value);
    let kg = parseFloat(document.getElementById("sul").value);
    let BMI = kg / (cm / 100) ** 2;
    document.getElementById("BMIout").innerHTML = BMI.toFixed(2);
}
function init(){
    document.getElementById("szamitas").addEventListener('click', szamit);
}
document.addEventListener("DOMContentLoaded",init);