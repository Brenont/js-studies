var lista = ["Arroz", "Feijão", "Macarrão", "Carne"];
lista.isArray

/* Propriedades de Manipulação de Array:

lista.indexOf("Feijão")
 ---> vai retornar a posição do "X"; 
 Ou seja: 1 (Lembra-se começa-se pelo 0);

lista.join(",")
 ---> vai juntar os itens do array os separando pelo "X"
 Ou seja: "Arroz,Feijão,Macarrão,Carne";

lista.pop("Carne")
 ---> vai remover do array o item "X"
 Ou seja: ["Arroz", "Feijão", "Macarrão"];

lista.push("Farinha")
 ---> vai adicionar ao array o item "X"
 Ou seja: ["Arroz", "Feijão", "Macarrão", "Carne", "Farinha"];

*/

/* Exemplos:

if(lista.indexOf("Feijão") > -1){
    alert("Tem na lista");
} else{
    alert("Não tem na lista");
}

*/