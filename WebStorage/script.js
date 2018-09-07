//WebStorage é usado pra guardar dados como se fossem cookies

localStorage.setItem("nome", "Breno");
localStorage.setItem("sobrenome", "Nunes")

//OU

localStorage.nome1 = "Breno";
localStorage.sobrenome1 = "Nunes"

console.log(localStorage.getItem("nome")+" "+localStorage.getItem("sobrenome"));

console.log(localStorage.getItem("nome1")+" "+localStorage.getItem("sobrenome1"));

localStorage.removeItem("nome")