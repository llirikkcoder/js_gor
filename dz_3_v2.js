/* 
ДЗ №3 - node проект
Теперь покруче: я ввожу дату в строковом формате а в выводе я хочу увидеть 
ближайший(можно и в прошлом) выходной к этой дате. Необходимо использовать 
библиотеку для дат moment. Потренируешся в использовании библиотек. Я хочу 
чтобы это был node проект. Почитай как использовать менеджер пакетов npm
ввожу дату аргументом программы
node weekend.js 16-04-1985
*/

var moment = require ('moment');
var dateFormat = 'DD-MM-YYYY'

var date = process.argv[2];
// желательно проверить что дата нормальная а не сразу юзать ее
// если дата в плохом формате выводим инструкцию для пользователя

var saturday = 5; // порядковый номер для субботы считая от нуля
var dayNumber = moment(date, dateFormat).weekday();
var daysToWeekend = saturday - dayNumber;
var daysToWeekendBack = dayNumber + 1;
// ok - 5 это какая-то магическая цифра - надо вынести в отдельную разумно названную переменную 
// из-за того что дата может быть невалиндная у тебя здесь креш будет 
if (dayNumber < 2) {
    console.log("The next day off:", moment(date, dateFormat).subtract(daysToWeekendBack, 'days').format(dateFormat));
} else if (dayNumber = 2) {
    console.log("The next day off:", moment(date, dateFormat).add(daysToWeekend, 'days').format(dateFormat), "or", moment(date, dateFormat).subtract(daysToWeekendBack, 'days').format(dateFormat) );
}else {
    moment(date, dateFormat).add(daysToWeekend, 'days').format(dateFormat);
}
// ok - мне нужна дата в прошлом если она ближе чем в будущем (смотри условие задачи)
// ok - ты третий раз используешь 'DD-MM-YYYY' строку - это копипаста - нужно вынести в отдельную переменную

//console.log(dayNumber);



