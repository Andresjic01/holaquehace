
function nombredeerika(){
    var $names = document.getElementById("nombre").value;
    var saludo = document.getElementById("chao");
    var inpus = document.getElementById("salida");

    if( $names === "erika"){
        alert("Hola te estaba esperando querida");
        saludo.classList.remove("hola");
        inpus.classList.add("hola");

    } else{
        alert("¿Quien monda tu ere? habla care verga");
    }
}