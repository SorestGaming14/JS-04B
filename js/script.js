var amount = +prompt('Введите количество примеров')

function example(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
function symexample(){
    return Math.floor(Math.random() * (5 - 1) + 1)
}

for (let i = 0; i < amount; i++) {
    let num1 = example(1, 20), num2 = example(1, 20), symbol = symexample(), Example = 0
    if (symbol == 1) {
        Example = num1 + num2
        symbol = '+'
    }
    if (symbol == 2) {
        Example = num1 - num2
        symbol = '-'
    }
    if (symbol == 3) {
        Example = num1 * num2
        symbol = '*'
    }
    if (symbol == 4) {
        Example = num1 / num2
        symbol = '/'
    }
    let answer = +prompt('Решите пример: ' + num1 + ' ' + symbol + ' ' + num2)
    console.log(Example == answer ? 'Ваш ответ верный - ' + answer : 'Ваш ответ не верный - ' + answer + '. Правильный ответ - ' + Example + '.');
}