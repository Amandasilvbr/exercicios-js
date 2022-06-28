function result(monthDayYear) {
    let initialDate= new Date(monthDayYear)
    let dayOfWeek= initialDate.getDay()
    switch (dayOfWeek) {
        case 0:
            return "Domingo"
            break;
        case 1:
            return "Segunda-feira"
            break;
        case 2:
            return "Terça-feira"
            break;
        case 3:
            return "Quarta-feira"
            break;
        case 4:
            return "Quinta-feira"
            break;
        case 5:
            return "Sexta-feira"
            break;
        case 6:
            return "Sábado"
            break;
    }
}

alert(result("june 28,2022"))