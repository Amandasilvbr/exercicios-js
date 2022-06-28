function math(n1, n2) {
    let add = (n1 + n2);
    let sub = (n1-n2);
    let div= (n1/n2);
    alert(`Soma: ${add}\nSubtração: ${sub}\nDivisão:${div}`);
}

let n1=Number(prompt("Digite o primeiro número:"));
let n2=Number(prompt("Digite o segundo número:"));

math(n1,n2);
