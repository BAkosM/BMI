function szamit(){
    let cm = parseFloat(document.getElementById("mag").value);
    let kg = parseFloat(document.getElementById("sul").value);
    let BMI = kg / (cm / 100) ** 2;
    let min = parseFloat((18.5*(cm/100)**2).toFixed(1));
    let max = parseFloat((24.9*(cm/100)**2).toFixed(1));
    let Idea = parseFloat(((min+max)/2));
    document.getElementById("BMIout").innerHTML = BMI.toFixed(2);
    document.getElementById("IdeaOut").innerHTML = Idea.toFixed(2);
    document.getElementById("min").innerHTML = min.toFixed(2);
    document.getElementById("max").innerHTML = max.toFixed(2);
    if (BMI<=18.5){
        document.getElementById("bmi1").style.backgroundColor = "orange";
    }else if (BMI<=24.9){
        document.getElementById("bmi2").style.backgroundColor = "orange";
    }else if (BMI<=29.9){
        document.getElementById("bmi3").style.backgroundColor = "orange";
    }else if (BMI<=34.9){
        document.getElementById("bmi4").style.backgroundColor = "orange";;
    }else if (BMI<=39.9){
        document.getElementById("bmi5").style.backgroundColor = "orange";
    }else if (BMI>=40){
        document.getElementById("bmi6").style.backgroundColor = "orange";
    }
}
function init(){
    document.getElementById("szamitas").addEventListener('click', szamit);
}
document.addEventListener("DOMContentLoaded",init);