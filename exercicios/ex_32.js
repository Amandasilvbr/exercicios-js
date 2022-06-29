function average(array) {
    let amount = 0
    array.forEach(element => {
        amount = amount+element
    });
    return (amount/array.length)
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
alert(average(number))