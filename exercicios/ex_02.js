function classification() {
    let l1 = Number(prompt("Digite o valor do primeiro lado."));
    let l2 = Number(prompt("Digite o valor do segundo lado."));
    let l3 = Number(prompt("Digite o valor do terceiro lado."));
    if (l1 === l2 && l2 === l3) {
        alert("O triângulo é equilátero.");
    } else if (l1 === l2 || l2 === l3 || l1 === l3) {
        alert("O triângulo é isóceles.");
    } else {
        alert("O triângulo é escaleno.");
    }
}

classification();