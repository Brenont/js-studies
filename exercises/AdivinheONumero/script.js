function verificar() {
    var num1 = document.getElementById("n1").innerHTML;
    var num2 = document.getElementById("n2").value;

    if (num1 == num2) {
        alert("Você acertou! : )");
        resetar()

    } else {
        alert("Você errou :( ... Tente novamente.");
        document.getElementById("n2").value = "";
    }
}

function resetar() {
    document.getElementById("n2").value = "";

    var r = Math.floor(Math.random() * 10);
    document.getElementById("n1").innerHTML = r;
}

function apertouTecla(event){
    var click = event.keyCode
    if (click === 13){
        verificar();
    }
}
