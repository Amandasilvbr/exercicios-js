function expo(base, exponent) {
    let result = Math.pow(base, exponent);
    alert(`O resultado é ${result}.`);
}

let b = Number(prompt("Digite a base."));
let e = Number(prompt("Digite o expoente."));

expo(b, e);