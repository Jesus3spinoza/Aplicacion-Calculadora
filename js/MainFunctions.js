var operandoa;
var operandob;
var operacion;
var OperadorLeido = false;

function init(){
    console.log("iniciado");
}

function addVal(val){
    var Actualtext = (document.getElementById("result").value);
    var lastChar = (Actualtext.split("")[Actualtext.length-1]);

    switch (val){
        case "/":
            if(lastChar != null && lastChar!=val){
                if(lastChar == "x"){
                    deleteLastVal(Actualtext)
                }
                if(operandoa == null){
                    operandoa = (Actualtext);
                }
                else if(operandoa != null && operandob == null){
                    const myArray = Actualtext.split(operacion);
                    operandob = (myArray[1]);
                    var result = doOperation(operandoa,operandob,operacion);
                    clearScreen();
                    print(result);
                }
                if(OperadorLeido == false){
                    operacion = val;
                }
                print(val)
            }
            break;
        case "x":
            if(lastChar != null && lastChar!=val){
                if(lastChar == "/"){
                    deleteLastVal(Actualtext)
                }
                if(operandoa == null){
                    operandoa = (Actualtext);
                }
                else if(operandoa != null && operandob == null){
                    const myArray = Actualtext.split(operacion);
                    operandob = (myArray[1]);
                    var result = doOperation(operandoa,operandob,operacion);
                    clearScreen();
                    print(result);
                }
                if(OperadorLeido == false){
                    operacion = val;
                }
                print(val)
            }
            break;
        case "+":
            if(lastChar != null && lastChar!=val){
                if(operandoa == null){
                    operandoa = (Actualtext);
                }
                else if(operandoa != null && operandob == null){
                    const myArray = Actualtext.split(operacion);
                    operandob = (myArray[1]);
                    var result = doOperation(operandoa,operandob,operacion);
                    clearScreen();
                    print(result);
                }
                if(OperadorLeido == false){
                    operacion = val;
                }
                print(val)
            }
            break;
        case "-":
            if(lastChar != null && lastChar!=val){
                if(operandoa == null){
                    operandoa = (Actualtext);
                }
                else if(operandoa != null && operandob == null){
                    const myArray = Actualtext.split(operacion);
                    operandob = (myArray[1]);
                    var result = doOperation(operandoa,operandob,operacion);
                    clearScreen();
                    print(result);
                }
                if(OperadorLeido == false){
                    operacion = val;
                }
                print(val)
            }
            break;
        default:
            print(val)
            break;
    }
}

function print(val){
    document.getElementById("result").value += val;
}

function clearScreen(){
    document.getElementById("result").value = " ";
    operandoa = null;
    operandob = null;
}

function ResetCalculadora(){
    clearScreen();
    operandoa = null;
    operandob = null;
    Actualtext = null;
    document.getElementById("result").value =  null;
}

function deleteLastVal(val){
    val = val.substring(0, val.length - 1);
    document.getElementById("result").value = val;
}

function resultOperation(){
    var Actualtext = (document.getElementById("result").value);
    var lastChar = (Actualtext.split("")[Actualtext.length-1]);
    
    if(operandoa != null && operandob == null){
        const myArray = Actualtext.split(operacion);
        operandob = (myArray[1]);
        var result = doOperation(operandoa,operandob,operacion);
        clearScreen();
        print(result);
        operandoa = null;
        operandob = null;
    }
}

function doOperation(val1, val2, operator){
    switch(operator){
        case "/":
            return val1/val2;
            break;
        case "x":
            return val1*val2;
        break;    
        case "+":
            return Number(val1)+Number(val2);
            break;
        case "-":
            return val1-val2;
        break;         
        default:
            break;
    }
}
var nextinput = 0;
function saveOperation(value){
nextinput++;
campo = '<li id="rut'+nextinput+'">Campo:<input type="text" size="20" id="campo' + nextinput + '" name="campo' + nextinput + '"&nbsp; /></li>';
$("#campos").append(campo);
}