let fruit = prompt("Qual fruta você quer comprar?")
switch (fruit) {
    case "Maça":
        console.log("Não vendemos esta fruta aqui.")
        break;
    case "Kiwi":
        console.log("Estamos com escassez de kiwis.")
        break;
    case "Melancia":
        console.log("Aqui está, são 3 reais o quilo.")
        break;
    default:
        console.log("Por favor, escolha outra fruta.")
        break
}