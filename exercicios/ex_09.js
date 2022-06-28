function approximate(number) {
    let newNumber=0;
    if (number % 5 < 3){
        newNumber=number+(5-(number%5));
    } else{
        newNumber=number;
    }
    return newNumber>40 ? `Aprovado com nota ${newNumber}.` : `Reprovado com nota ${newNumber}.`;
}

alert(approximate(40));