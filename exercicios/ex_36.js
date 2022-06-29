function multiplication(array, number) {
    let result = []
    array.forEach(element => {
        result.push(element * number)
    });
    return result
}

function multiplication2(array, number) {
    let result2 = []
    array.forEach(element => {
        element > 5 ? result2.push(element * number) : ''
    })
    return result2
}

alert(multiplication([1, 2, 3, 4, 10], 2));
alert(multiplication2([1, 2, 3, 4, 10], 2));
