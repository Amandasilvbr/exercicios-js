function reverse(firstArray, secondArray) {
    let firstArrayCopy = firstArray
    let secondArrayCopy = secondArray
    
    firstArray = secondArrayCopy
    secondArray = firstArrayCopy

    return `Array 1: ${firstArray}.\nArray 2: ${secondArray}.`
}

alert(reverse([1, 2, 3, 4], [5, 6, 7, 8]))