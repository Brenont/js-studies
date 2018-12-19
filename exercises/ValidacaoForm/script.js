// ESTRUTURA BASICA DE VALIDAÇÃO
function validar(){
    var valor = document.getElementById("numero").value;

    if(valor.length > 2) {
        alert("Você digitou mais de 2 algarismos")
        return false;
    }
    else{
        return true;
    }
}