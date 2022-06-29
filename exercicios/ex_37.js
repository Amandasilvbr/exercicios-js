function numbers(n1,n2){
    let number=n1+n2
    let result= number>100 ? `O resultado da soma é ${number}.` : `A soma não é maior que 100.`
    return result
}

alert(numbers(100,200))