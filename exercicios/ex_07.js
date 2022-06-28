function bhaskara(a, b, c) {
    let delta = (Math.pow(b, 2)) - (4 * a * c);
    if (delta < 0) {
        return (`O delta não pode ser negativo.`);
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        let result = [x1, x2];
        return (result);
    }
}

alert(bhaskara(-4, 5, 12));