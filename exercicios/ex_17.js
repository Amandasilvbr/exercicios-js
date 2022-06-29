function newMoney(plann, initialMoney) {
    switch (plann) {
        case "A":
            return initialMoney+(initialMoney * 0.1)
            break;
        case "B":
            return initialMoney+(initialMoney * 0.15)
            break;
        case "C":
            return initialMoney+(initialMoney * 0.2)
            break;
        default:
        return "Plano inválido"
    }
}

alert(newMoney("A",1000));