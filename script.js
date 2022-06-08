let lang = 'en';
let week = [
    [
        'Понедельник', 'Вторник', 'Среда',
        'Четверг', 'Пятница', 'Суббота',
        'Воскресенье',
    ],
    [
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday',
        'Sunday',
    ],
];

function englishDays(arr) {
    arr.length = 0;
    arr.push(
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday',
        'Sunday');
}
function russianDays(arr) {
    arr.length = 0;
    arr.push(
        'Понедельник', 'Вторник', 'Среда',
        'Четверг', 'Пятница', 'Суббота',
        'Воскресенье');
}


if (lang == 'en') {
    russianDays(week);
    console.log(week);
}
else if (lang == 'ru') {
    englishDays(week);
    console.log(week);
}


switch (lang) {
    case 'ru':
        russianDays(week);
        console.log(week);
        break;
    case 'en':
        englishDays(week);
        console.log(week);
        break;
}

// Решение через многомерный массив не приходит вообще в голову


let namePerson = prompt('Введите имя', 'Артем, Александр или другое имя');
let result = namePerson === 'Артем' ? 'Директор' : namePerson === 'Александр' ? 'Преподаватель' : 'студент';
console.log(result);