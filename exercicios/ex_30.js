function number(n) {
    let bigger = n[0]
    let smaller = n[0]
    n.forEach(element => {
        element > bigger ? bigger = element : ''
        element < smaller ? smaller = element : ''
    });
    return `O maior número é ${bigger}, e o menor número é ${smaller}.`
}

let arrayNumbers = [2, 1, 3, 12, 500, 20, 40, 30]
alert(number(arrayNumbers))