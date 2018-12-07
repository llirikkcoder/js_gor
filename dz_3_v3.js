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
// ok - желательно проверить что дата нормальная а не сразу юзать ее
// если дата в плохом формате выводим инструкцию для пользователя
var dateValid = moment(date, 'DD-MM-YYYY', true);

var saturday = 6; // порядковый номер для субботы
var dayNumber = moment(dateValid, dateFormat).weekday();
var daysToWeekend = saturday - dayNumber;
var daysToWeekendBack = dayNumber;
// ok - 5 это какая-то магическая цифра - надо вынести в отдельную разумно названную переменную 
// из-за того что дата может быть невалиндная у тебя здесь креш будет 
if (dayNumber < 3) {
    console.log("The next day off:", moment(dateValid, dateFormat).subtract(daysToWeekendBack, 'days').format(dateFormat));
} else if (dayNumber == 3) {
    console.log("The next day off:", moment(date, dateFormat).subtract(daysToWeekendBack, 'days').format(dateFormat), "or", moment(dateValid, dateFormat).add(daysToWeekend, 'days').format(dateFormat));
}else {
    console.log("The next day off:", moment(dateValid, dateFormat).add(daysToWeekend, 'days').format(dateFormat));
}
// ok - мне нужна дата в прошлом если она ближе чем в будущем (смотри условие задачи)
// ok - ты третий раз используешь 'DD-MM-YYYY' строку - это копипаста - нужно вынести в отдельную переменную

//console.log(dayNumber);



