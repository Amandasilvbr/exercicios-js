function numbers(array) {
    return array.sort(sortfunction)
    function sortfunction(a, b) {
        return (a - b) 
    }
}

let array = [1, 5, 4, 10, 9, 8, 3, 7, 12]

alert(numbers(array))