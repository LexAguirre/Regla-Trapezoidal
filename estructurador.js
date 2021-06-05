export default class Estructurador{
 
    constructor(){
        this._estructura = new Array();
        this._vectorX = new Array();
        this._vectorFX = new Array();
    }

    formarFormula(receptor){
        
        let formula = `${receptor.getNX5() + '*' +  receptor.getX5()} + ${receptor.getNX4() + '*' + receptor.getX4()} + ${receptor.getNX3() + '*' + receptor.getX3()} + ${receptor.getNX2() + '*' + receptor.getX2()} + ${receptor.getNX1() + '*' + receptor.getX1()} + ${receptor.getConstante()}`;

        

        return formula;

    }

    clacularPendiente(receptor){
        let resultado = (receptor.getB()-receptor.getA()) / (receptor.getSegmentos());

        let pendiente = (receptor.getB() + '-' + receptor.getA()) + ' / ' + (receptor.getSegmentos()) + ' = ' + resultado;

        return pendiente;
    }

    _Altura(receptor){
        let resultado = (receptor.getB()-receptor.getA()) / (receptor.getSegmentos());

        return resultado;
    }

    tablaX(receptor){
        let espacio = this._Altura(receptor);
        console.log(espacio);
        let A = receptor.getA();
        let B = receptor.getB();
        console.log(A, B);

            for (let i = A; i <= B; i = i + espacio){
                this._vectorX.push(i);
            }

        return this._vectorX;

    }

    formarFormulaFuncional(receptor){
        
        let x5;
        let x4;
        let x3;
        let x2;
        let x1;
        let x;
        //console.log(this._vectorX);

        for (let i = 0; i < this._vectorX.length; i++){

            x = this._vectorX[i];
            //console.log(x);

            if (receptor.getX5() === "x⁵"){
                x5 = Math.pow(x, 5);
            } else {
                x5 = 0;
            }

            if (receptor.getX4() === "x⁴"){
                x4 = Math.pow(x, 4);
            } else {
                x4 = 0;
            }

            if (receptor.getX3() === "x³"){
                x3 = Math.pow(x, 3);
            } else {
                x3 = 0;
            }

            if (receptor.getX2() === "x²"){
                x2 = Math.pow(x, 2);
            } else {
                x2 = 0;
            }

            if (receptor.getX1() === "x"){
                x1 = Math.pow(x, 1);
            } else {
                x1 = 0;
            }

            let formula = (receptor.getNX5() * (x5)) + (receptor.getNX4() * (x4)) + (receptor.getNX3() * (x3)) + (receptor.getNX2() * (x2)) + (receptor.getNX1() * (x1)) + (receptor.getConstante());
        
            this._vectorFX.push(formula);
        }

        return this._vectorFX;
    }

    formarFormulaIntegralVisual(receptor){

    }







    add(receptor){
        this._estructura.push(receptor);

        return true;
    }

}