/* EXISTEM DOIS TIPOS DE LOOP */


/* Loop com while*/
var x = 0;

document.write("Iniciando o loop...<br/>")

while(x < 10) {
    
    document.write("Numero: "+x+"<br/>");
    x++;
}

document.write("Finalizando o loop...<br/>");


/* Loop com for */

for(x = 0; x < 10; x++) {
    document.write("Numero "+x+"<br/>");
}