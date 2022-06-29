function calc(month, yearValue) {
    let value = yearValue*((1 + 0.05) ** (month-1));
    return value;
}

alert(calc(1, 100))

