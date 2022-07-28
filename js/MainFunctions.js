var operandoa;
var operandob;
var operacion;

function init(){
    console.log("iniciado");
}

function addVal(val){
    var Actualtext = (document.getElementById("result").value);
    var lastChar = (Actualtext.split("")[Actualtext.length-1]);
    if(lastChar == "/" && val == "x"){
        deleteLastVal(Actualtext)
    }
    else if(lastChar == "x" && val == "/"){
        deleteLastVal(Actualtext)
    }
    document.getElementById("result").value += val;
}

function clearScreen(){
    document.getElementById("result").value = " ";
}

function deleteLastVal(val){
    val = val.substring(0, val.length - 1);
    document.getElementById("result").value = val;
}