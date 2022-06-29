function numbers(begin, end) {
    let parameters= []
    parameters.push(begin,end)
    let array = []
    parameters[0] > parameters[1] ? parameters.reverse() : ''
    for (let i = parameters[0]; i <= parameters[1]; i++) {
        if (i % 2 != 0){
            array.push(i)
        }
    }
    return array
}

alert(numbers(0,100))