function simple(startingMoney, rate, time) {
    let simpleResult = startingMoney * time * rate;
    alert(`Juros simples: ${simpleResult}`);
}

function compound(startingMoney, rate, time) {
    compoundResult = (startingMoney * 1 + rate ** time).toFixed(2);
    alert(`Juros composto: ${compoundResult}`);
}

simple(2000, 0.018, 20);
compound(2000, 0.018, 20);
