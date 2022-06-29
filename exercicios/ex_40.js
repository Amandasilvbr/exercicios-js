function result(notes) {
    let concepts = []
    notes.forEach(element => {
        element >= 0 && element <= 4.9 ? concepts.push(`Conceito da nota ${element}: D.\n`) : ''
        element >= 5 && element <= 6.9 ? concepts.push(`Conceito da nota ${element}: C.\n`) : ''
        element >= 7 && element <= 8.9 ? concepts.push(`Conceito da nota ${element}: B.\n`) : ''
        element >= 9 && element <= 10 ? concepts.push(`Conceito da nota ${element}: A.\n`) : ''
    });
    return concepts.join('')
}

alert(result([9.5,7.5,5,2]))