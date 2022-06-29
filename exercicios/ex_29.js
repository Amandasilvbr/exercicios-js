function numbers(arrayNumbers) {
    let inTheBreak=0
    let ouTheBreak=0
    arrayNumbers.forEach(element => {
        element >= 10 && element <= 20 ? inTheBreak++ : ouTheBreak++
    });
    return `${inTheBreak} números estão dentro do intervalo, e ${ouTheBreak} estão fora do intervalo.`
}

let n = [1, 2, 30, 20, 10, 8, 12, 14, 18,32]

alert(numbers(n))