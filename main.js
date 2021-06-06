import Receptor from "./receptor.js";
import Estructurador from "./estructurador.js";
/*
console.log("Prueba");
let r1 = new Receptor(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 3, 4);
let e1 = new Estructurador(r1);

console.log(r1.getNX5());
console.log(r1.getNX4());
console.log(r1.getNX3());
console.log(r1.getNX2());
console.log(r1.getNX1());
console.log(r1.getConstante());
console.log(r1.getX5());
console.log(r1.getX4());
console.log(r1.getX3());
console.log(r1.getX2());
console.log(r1.getX1());
console.log(r1.getA());
console.log(r1.getB());
console.log(r1.getSegmentos());


console.log("Estructurador");
console.log(e1.formarFormula(r1));
console.log(e1.clacularPendiente(r1)); 
console.log(e1.tablaX(r1));
console.log(e1.formarFormulaFuncional(r1));
//console.log(e1._estX5(r1), "hola");
console.log(e1.formIntegralA(r1));
console.log(e1.formIntegralB(r1));
console.log(e1.primeraIntegral(r1));
console.log(e1.diseñoIntegral(r1));
console.log(e1.ecuacionI(r1));
console.log(e1.calcularER(r1));
console.log(e1.add(r1));
*/
class App{
    constructor(){ 
        this.btnRegister = document.querySelector("#btnRegister");
        btnRegister.addEventListener("click", this.readForm);
        this._table = document.querySelector('#tableGrades');
        this._estructura = new Estructurador();
    }

    readForm = () => {
        let receptor = Receptor.readForm();
    
        if(receptor === false){
            Swal.fire(
                'Error',
                'Es nesesario colocar las letras A y B ademas de los segmentos',
                'error'
              );
              return;
        }

        let completado = this._estructura.add(receptor);
        console.log(this._estructura);
        
        this._printInTable(receptor);
            Swal.fire(
                'Bien!',
                'Ecuación Registrada',
                'success'
              )

    }

    _printInTable(receptor){
        let row = this._table.insertRow(1);

        let colFormula = row.insertCell(0);
        let colAltura = row.insertCell(1);
        let colIntegral = row.insertCell(2);
        let colIntegralI = row.insertCell(3);
        let colI = row.insertCell(4);
        let colEr = row.insertCell(5);

        colFormula.innerHTML = this._estructura.formarFormula(receptor);
        colAltura.innerHTML = this._estructura.clacularPendiente(receptor);
        colIntegral.innerHTML = this._estructura.diseñoIntegral(receptor);
        colIntegralI.innerHTML = this._estructura.primeraIntegral(receptor);
        colI.innerHTML = this._estructura.ecuacionI(receptor);
        colEr.innerHTML = this._estructura.calcularER(receptor);

    }

}

new App();


/*
let numIteracion = (5-1) / 2;
console.log(numIteracion)

let x0 = 0;
let x1 = 1;

let xr1 = (x1 + x0) / 2

console.log("Primera Iteración");
console.log(xr1);
console.log(x0 = x1);
console.log(x1 = xr1);

for(let i = 0; i < numIteracion; i++) {
    
    console.log("Iterracion");
    let xr2 = (x1 + x0) / 2

    console.log(xr2);
    console.log(x0 = xr1);
    console.log(x1 = xr2);
    

    let xr2 = (x1 + x0) / 2

console.log("Segunda Iteración");
console.log(xr2);
console.log(x1 = xr2);
console.log(x0 = xr1);

xr1 = (x1 + x0) / 2

console.log("tercera Iteración");
console.log(xr1);
console.log(x1 = xr2);
console.log(x0 = xr1);
}

*/
