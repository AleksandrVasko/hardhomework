let randomNumber = !NaN;
let phrase = 'В некотором смысле история теории языка программирования предшествует даже развитию самих языков программирования. В частности, λ-исчисление, разработанное Алонзо Чёрчем и Стивеном Клини в 1930-х годах, фактически является первым языком программирования, даже при том, что оно было предназначено больше для теоретических вопросов вычислимости, нежели является средством для программистов; многие современные функциональные языки программирования являются вариантами λ-исчисления. Дальнейшая история теории тесно переплетена с историей языков программирования, при этом в рамках теоретических исследований создавались новые парадигмы, конструкции и методы, а результаты внедрения их в практические языки программирования обеспечивали обратную связь для развития теории.';

function string(str) {
    if (typeof(str) != 'string') {
        alert('Это не строка');
    }
    else {
        str.trim();
        if (str.length > 30) {
            alert(str.substring(0, 30) + '...');
        }
    }
}
string(phrase);
string(randomNumber);