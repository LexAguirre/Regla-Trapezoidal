'use strict';

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
        let A = receptor.getA();
        let B = receptor.getB();

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

    formIntegralA(receptor){
        let A = receptor.getA();
        let x5;
        let x4;
        let x3;
        let x2;
        let x1;

        if (receptor.getX5() === "x⁵"){
            x5 = (receptor.getNX5() * (Math.pow(A, 6))) / 6 ;
        } else {
            x5 = 0;
        }

        if (receptor.getX4() === "x⁴"){
            x4 = (receptor.getNX4() * (Math.pow(A, 5))) / 5 ;
        } else {
            x4 = 0;
        }

        if (receptor.getX3() === "x³"){
            x3 = (receptor.getNX3() * (Math.pow(A, 4))) / 4 ;
        } else {
            x3 = 0;
        }

        if (receptor.getX2() === "x²"){
            x2 = (receptor.getNX2() * (Math.pow(A, 3))) / 3 ;
        } else {
            x2 = 0;
        }

        if (receptor.getX1() === "x"){
            x1 = (receptor.getNX1() * (Math.pow(A, 2))) / 2 ;
        } else {
            x1 = 0;
        }

        let integralA = x5 + x4 + x3 + x2 + x1 + (receptor.getConstante() * A);

        return integralA
    }

    formIntegralB(receptor){
        let B = receptor.getB();
        let x5;
        let x4;
        let x3;
        let x2;
        let x1;

        if (receptor.getX5() === "x⁵"){
            x5 = (receptor.getNX5() * (Math.pow(B, 6))) / 6 ;
        } else {
            x5 = 0;
        }

        if (receptor.getX4() === "x⁴"){
            x4 = (receptor.getNX4() * (Math.pow(B, 5))) / 5 ;
        } else {
            x4 = 0;
        }

        if (receptor.getX3() === "x³"){
            x3 = (receptor.getNX3() * (Math.pow(B, 4))) / 4 ;
        } else {
            x3 = 0;
        }

        if (receptor.getX2() === "x²"){
            x2 = (receptor.getNX2() * (Math.pow(B, 3))) / 3 ;
        } else {
            x2 = 0;
        }

        if (receptor.getX1() === "x"){
            x1 = (receptor.getNX1() * (Math.pow(B, 2))) / 2 ;
        } else {
            x1 = 0;
        }

        let integralB = x5 + x4 + x3 + x2 + x1 + (receptor.getConstante() * B);

        return integralB
    }

    primeraIntegral(receptor){
        let integral = this.formIntegralB(receptor) - this.formIntegralA(receptor);
        return integral
    }

    diseñoIntegral(receptor){
        
        let x5;
        let x4;
        let x3;
        let x2;
        let x1;
        let xC
        
        if (receptor.getX5() === "x⁵"){
            x5 = "(" + (receptor.getNX5() + ' * ' + "x⁶") + " / " + "6)";
        } else {
            x5 = "(" + (receptor.getNX5() + ' * ' + "0⁶") + " / " + "6)";
        }

        if (receptor.getX4() === "x⁴"){
            x4 = "(" + (receptor.getNX4() + ' * ' + "x⁵") + " / " + "5)";
        } else {
            x4 = "(" + (receptor.getNX4() + ' * ' + "0⁵") + " / " + "5)";
        }

        if (receptor.getX3() === "x³"){
            x3 = "(" + (receptor.getNX3() + ' * ' + "x⁴") + " / " + "4)";
        } else {
            x3 = "(" + (receptor.getNX3() + ' * ' + "0⁴") + " / " + "4)";
        }

        if (receptor.getX2() === "x²"){
            x2 = "(" + (receptor.getNX2() + ' * ' + "x³") + " / " + "3)";
        } else {
            x2 = "(" + (receptor.getNX2() + ' * ' + "0³") + " / " + "3)";
        }

        if (receptor.getX1() === "x"){
            x1 = "(" + (receptor.getNX1() + ' * ' + "x²") + " / " + "2)";
        } else {
            x1 = "(" + (receptor.getNX1() + ' * ' + "0²") + " / " + "2)";
        }

        if (receptor.getConstante() === 0){
            xC = ('('+receptor.getConstante() + '*' + "0)");
        } else {
            xC = ('('+receptor.getConstante() + '*' + "x)");
        }

        let formulaIntegral = x5 + ' + ' + x4 + ' + ' + x3 + ' + ' + x2 + ' + ' + x1 + ' + ' + xC; 
        return formulaIntegral
    }
/*
    _estX5(receptor){
        let A = receptor.getA();
        let x5;

        if (receptor.getX5() === "x⁵"){
            x5 = (receptor.getNX5() + ' * ' + "x⁶") / "6" ;
            console.log(x5)
        } else {
            x5 = "(" + (receptor.getNX5() + ' * ' + "0⁶") + " / " + "6)";
            console.log(x5);
        }

        if (receptor.getX5() === "x⁵"){
            x5 = (receptor.getNX5() * (Math.pow(A, 6))) / 6 ;
            return x5;
        } else {
            return 0;
        }
    }*/





    add(receptor){
        this._estructura.push(receptor);

        return true;
    }

}