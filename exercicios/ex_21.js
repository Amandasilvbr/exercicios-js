function result(age) {
    let price = 100
    if (age < 10) {
        price = price + 80;
    } else if (age >= 10 && age <= 30) {
        price = price + 50;
    } else if (age > 30 && age <= 60) {
        price = price + 95;
    } else {
        price = price + 130;
    }
    return price
}

alert(result(20));