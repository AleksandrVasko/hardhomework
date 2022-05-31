//создал переменную
const num = 266219;

//вывел в консоль произведение цифр этого числа
const newNum = num.toString().split('');
const res = newNum.reduce((a, b) => (a * b));
console.log(res);

//возвел в степень
const a = res ** 3;
/*console.log(a);*/

//вывел в консоль первые 2 цифры
console.log(a.toString().slice(0, 2));


