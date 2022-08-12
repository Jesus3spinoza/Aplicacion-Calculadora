var operandoa;
var operandob;
var operacion;
var OperadorLeido = false;

function init(){
    //console.log("iniciado");
}

function addVal(val){
    var Actualtext = (document.getElementById("result").value);
    var lastChar = (Actualtext.split("")[Actualtext.length-1]);
    console.log(val);
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

const contenedor = document.querySelector('#operaciones-datos');
let total = 1;

function saveOperation(value){
    if(value != ""){
        let OperadorAlFinal = SaberSiTerminaConUnOperador(value);
        if(OperadorAlFinal == true){
           value = value.substring(0, value.length-1);
           
        }
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="container subContenedorOperaciones-desing" id="subContenedorOperaciones">
        <div class="row">
        <div class="col-1 order-firt"><label id="numeroDato" style="color:white;" class="col order-firt">${total++} </label>
        </div>
        <div class="col-6 contenedorInput"><input id="descripcion-operacion" class="DescripcionValorLeido" type="text" placeholder="Descripcion"></div>
        <div class="col-2"><span id="valorLeido"class="valorLeido "> ${parseInt(value)}</span></div>
        <div class="col-1 order-last"><button class="btn-delete" onclick="eliminar(this)">Eliminar</button></div>
        </div>
        </div>
`;
        contenedor.appendChild(div);
    }
}

function SaberSiTerminaConUnOperador(val){
    var lastChar = (val.split("")[val.length-1]);
    switch(lastChar){
        case "+":
            return true;
            break;
        case "-":
            return true;
            break;   
        case "/":
            return true;
            break;  
        case "x":
            return true;
            break;  
        case "%":
            return true;
            break; 
        default:
            return false;
            break
    }
}

/**
 * Método para eliminar el div contenedor del input
 * @param {this} e 
 */
 const eliminar = (e) => {
    const divPadre = e.parentNode;
    contenedor.removeChild(divPadre);
    actualizarContador();
};

const actualizarContador = () => {
    let divs = contenedor.children;
    total = 1;
    for (let i = 0; i < divs.length; i++) {
        divs[i].children[0].innerHTML = total++;
    }//end for
};

function LimpiarDatos(){
    document.getElementById("operaciones-datos").innerHTML="";
    total = 1;
}

function ImprimirDatos(numeroDato, descripcion, valorLeido){
    var numero = document.getElementById(numeroDato);
    var valor = document.getElementById(valorLeido);
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write( numero.innerHTML + " - ");
    ventimp.document.write( descripcion );
    ventimp.document.write( valor.innerHTML );
    ventimp.document.close();
    ventimp.print( );
    ventimp.close();
}