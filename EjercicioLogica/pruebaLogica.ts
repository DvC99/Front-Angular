const XLSX = require("xlsx");

var workbook = XLSX.readFile('time_series_covid19_deaths_US.csv');
var sheet = workbook.SheetNames[0];
var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);


var estados = [];
var contagiados = [];
var habitantes = [];

estados.push(data[0]['Province_State']);
var suma = data[0]['Population'];
var contagios = data[0]['4/26/21'];
var mayor = [-100,""]
var menor = [999,""]


for (let i = 1; i < Object.keys(data).length; i++) {
    if (estados.lastIndexOf(data[i]['Province_State']) === -1) {
        estados.push(data[i]['Province_State']);
        
        habitantes.push(suma);
        contagiados.push(contagios);

        if(contagios > mayor[0]){
            mayor[0] = contagios;
            mayor[1] = data[i-1]['Province_State'];
        }

        if(contagios < menor[0] && contagios != 0){
            menor[0] = contagios;
            menor[1] = data[i-1]['Province_State'];
        }

        suma = data[i]['Population'];
        contagios = data[i]['4/26/21'];
    } else {        
        suma = suma + data[i]['Population'];
        contagios = contagios + data[i]['4/26/21'];
    }
   
}


console.log("El estado con mayor acumulado a la fecha es "+mayor[1]+" con un valor de "+mayor[0]+" muertes.")
console.log("El estado con menor acumulado a la fecha es "+menor[1]+" con un valor de "+menor[0]+" muertes.")
console.log("El porcentaje de muertes vs el total de poblacíon por estado:")
console.log("El estado mas afectado fue:")
