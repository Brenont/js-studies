function somar(){
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    var result = campo1 + campo2;

    alert("A soma deles é "+ result);
    console.log(result);
}