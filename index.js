var calcularSoma = function () {
    var INDICE = 13;
    var SOMA = 0;
    var K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    console.log("O valor final de SOMA é:", SOMA);
};
var verificarFibonacci = function (numero) {
    var a = 0, b = 1, temp = 0;
    while (b < numero) {
        temp = b;
        b = a + b;
        a = temp;
    }
    if (b === numero || numero === 0) {
        console.log("O n\u00FAmero ".concat(numero, " pertence \u00E0 sequ\u00EAncia de Fibonacci."));
    }
    else {
        console.log("O n\u00FAmero ".concat(numero, " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci."));
    }
};
var calcularFaturamento = function (faturamento) {
    var diasValidos = faturamento.filter(function (f) { return f > 0; });
    var menorValor = Math.min.apply(Math, diasValidos);
    var maiorValor = Math.max.apply(Math, diasValidos);
    var mediaMensal = diasValidos.reduce(function (acc, val) { return acc + val; }, 0) / diasValidos.length;
    var diasAcimaDaMedia = diasValidos.filter(function (f) { return f > mediaMensal; }).length;
    console.log("Menor valor de faturamento:", menorValor);
    console.log("Maior valor de faturamento:", maiorValor);
    console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
};
var calcularPercentual = function (faturamento) {
    var total = Object.values(faturamento).reduce(function (acc, val) { return acc + val; }, 0);
    Object.entries(faturamento).forEach(function (_a) {
        var estado = _a[0], valor = _a[1];
        var percentual = (valor / total) * 100;
        console.log("".concat(estado, ": ").concat(percentual.toFixed(2), "%"));
    });
};
var inverterString = function (input) {
    var invertida = "";
    for (var i = input.length - 1; i >= 0; i--) {
        invertida += input[i];
    }
    return invertida;
};
console.log("1) Cálculo de SOMA");
calcularSoma();
console.log("\n2) Verificar Fibonacci");
verificarFibonacci(13);
console.log("\n3) Cálculo de faturamento diário");
var faturamentoDiario = [200, 450, 0, 0, 150, 300, 0, 400, 350, 0, 0, 100, 300, 700, 0, 0, 600, 500, 0, 200];
calcularFaturamento(faturamentoDiario);
console.log("\n4) Percentual de faturamento por estado");
var faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};
calcularPercentual(faturamentoPorEstado);
console.log("\n5) Inverter string");
console.log(inverterString("Gupy challenge"));
