function calc(product, quantity) {
    switch (product) {
        case "Cachorro quente":
            return 3 * quantity
            break;
        case "Hambúrguer simples":
            return 4 * quantitycase
            break;
        case "Cheeseburguer":
            return 5.5 * quantity
            break;
        case "Bauru":
            return 7.5 * quantity
            break;
        case "Refrigerante":
            return 3.5 * quantity
            break;
        case "Suco":
            return 2.8 * quantity
            break;
        default:
            "Produto não existente."
    }
}

alert(calc("Cheeseburguer",2));