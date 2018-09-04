function acao(){
    document.write("Executou!! <br>");
}
function repeticao(){
    document.write("Esse está se repetindo...<br>")
}
//Repeti a função de x em x tempo
var timer = setInterval(repeticao, 2000);

//Rodar a função apos tempo x
setTimeout(acao, 5000);