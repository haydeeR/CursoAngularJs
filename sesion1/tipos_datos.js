var nombre = "Juan";
var edad = 18;
var asistencia = true;
var sexo;
(function (sexo) {
    sexo[sexo["Femenino"] = 0] = "Femenino";
    sexo[sexo["Masculino"] = 1] = "Masculino";
})(sexo || (sexo = {}));
;
var zipcode;
zipcode = 78130;
zipcode = "a78178";
var i = 0;
for (var i_1 = 0; i_1 < 5; i_1++) {
    // console.log(i);
}
var nombres = ["Juan", "Pedro", "Maria"];
console.log(nombres.forEach(function (e, i) { return i + i; }));
var saludo = function () { console.log("hola"); };
