var numeros = [2, 3, 4, 5, 6];
numeros.forEach(function (elemento, index, array) {
    (function () { console.log("hola mundo"); });
    console.log("Numero de [" + index + "] = " + elemento);
});
var saludar = function () { console.log("hola mundo"); };
