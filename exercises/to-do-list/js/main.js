// Passo a Passo
    //  *Criar variaveis 
    // 1. Desenhar lista
    // 2. Adicionar Elemento
    // 3. Remover Elemento

    let lista = ["Comprar Feijão", "Varrer a casa", "Colocar roupa na corda", "Cancelar TIM", "Tirar Pó dos Moveis", "Arrumar a Cama", "Conferir E-mail", "Tirar Lixo", "Passear com o Cachorro", "Pagar Ligth", "Limpar Fogão", "Fazer Backup em Fotos","Lavar Quintal"];

    desenharLista();

    let btnAdicionar = document.getElementById("btn-add");
    btnAdicionar.addEventListener("click", function(){
        adicionarItem(inputItem.value);
    })

    let inputItem = document.getElementById("input");
    inputItem.addEventListener("keypress", function(e){
        if(e.keyCode == 13){
            adicionarItem(inputItem.value)
        }
    });
    

    // Funções da Lista 

    function adicionarItem(item){
        if(!inputItem.value == ""){
            lista.push(item);
            desenharLista();
            inputItem.value = "";
        }
    }

    function removerItem(itemIndice){
        lista.splice(itemIndice, 1);
        desenharLista();
    }

    function desenharLista(){
        let listaElement = document.getElementById("list-container");

        let elementos = "";
        
        for(let i = 0; i < lista.length; i++){
            elementos = elementos + 
            `<li class="item"> ${lista[i]} 
                <i class="fas fa-minus-square btn-delete" onclick="removerItem(${i})"></i>
            </li>`;
        }
        listaElement.innerHTML = elementos;
    }

