function number(n) {
    let posi = 0
    let neg = 0
    n.forEach(element => {
        element > 0 ? posi++ : ''
        element < 0 ? neg++ : ''
    });
    return `O número de positivos é ${posi}, e o número de negativos é ${neg}.`
}

let arrayNumbers = [-2, 1, 3, 12, -500, 20, -40, 30]
alert(number(arrayNumbers))





