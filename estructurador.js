export default class Estructurador{
 
    constructor(){
        this._estructura = new Array();
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

    






    add(receptor){
        this._estructura.push(receptor);

        return true;
    }

}