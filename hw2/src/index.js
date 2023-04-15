/*1.  Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
%Телефон%, %Почта%.». */

 /*   let name = prompt('Ваше имя'),
        age = prompt('Ваш возраст', 0),
        city = prompt('Ваш город проживания'),
        phone = prompt('Ваш телефон'),
        email = prompt('Ваш эл. почта'),
        company = prompt('Ваша компания');

function about(name, age, city, phone, email, company) {

    return `Меня зовут ${name}. Мне ${age} лет.
Я проживаю в городе ${city} и работаю в компании ${company}.
Мои контактные данные: ${phone}, ${email}.`
}

console.log(about(name, age, city, phone, email, company));

console.log('\n');*/


/*2.  Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
Выведите на экран «%Имя% родился в %Год% году.». */

/*function dateOfBirth(name, age) {
    let date = new Date().getFullYear(),
        yearOfBirh = date - age;

    return `${name} родился в ${yearOfBirh} году`
}

console.log(dateOfBirth(name, age));

console.log('\n');*/

/*3.  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */

function comparison(num) {
    num = num + '';
    let sum1 = +num.at(0) + +num.at(1)+ +num.at(2),
        sum2 = +num.at(3) + +num.at(4)+ +num.at(5);
    if (sum1 === sum2) return 'Yes' 
    return 'No';
}

console.log(comparison(223115));
console.log('\n');

/*4.  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 1, 0, -3. */

function whatVariable(num) {
    (num > 0) ? console.log('Верно') : console.log('Неверно');
}

whatVariable(1);
whatVariable(0);
whatVariable(-3);
console.log('\n');

/*5.  Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, 
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в 
квадрат. */

let a = 10, 
    b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log((a + b) > 1 ? Math.pow((a + b), 2) : (a + b));
console.log('\n');

/*6.  Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 
'Неверно'. */

console.log( (a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Верно' : 'Неверно');
console.log('\n');

/*7.  В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
это число (в первую, вторую, третью или четвертую). */

function getQuarter(n){
    let quarter = Math.floor(n / 15) + 1;
    switch(quarter){
        case 1:
            console.log('The first quarter of an hour');
        break;
        case 2:
            console.log('The second quarter of an hour');
        break;
        case 3:
            console.log('The third quarter of an hour');
        break;
        case 4:
            console.log('The fourth quarter of an hour');
        break;
        default:
            console.log('Input a number from 0 till 59');

    }
}

getQuarter(55);
console.log('\n');

/*8.  В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду 
месяца попадает это число (в первую, вторую или третью). */

function getDecadeOfMonth(n){
    if (n >= 0 && n <= 10) {
        console.log('The first decade of month');
    } else if (n > 10 && n <= 20) {
        console.log('The second decade of month');
    } else if (n > 20 && n <= 31) {
        console.log('The third decade of month');
    } else {
        console.log('Input a number from 1 till 31');
    }
}

getDecadeOfMonth(32);
console.log('\n');

/*9.  Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы 
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты 
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, 
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», 
соответственно. */

function getDate(n){
    let getYears = Math.floor(n / 365),
        getMonth = Math.floor(n / 31),
        getWeek = Math.floor(n / 7),
        getHour = Math.floor(n * 24),
        getMinutes = Math.floor(getHour * 60),
        getSeconds = Math.floor(getMinutes * 60);

        return `Лет: ${getYears < 1 ? `Меньше года` : getYears}, месяцев: ${getMonth - 12}, дней: ${n - (getMonth * 31)},
Месяцев: ${getMonth  < 1 ? `Меньше месяца` : getMonth}, дней: ${n - (getMonth * 31)},
Недель: ${getWeek < 1 ? `Меньше недели` : getWeek},
Часов: ${getHour},
Минут: ${getMinutes},
Секунд: ${getSeconds}.`
}

console.log(getDate(500));
console.log('\n');

/*10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
т.д.). Скрипт определение поры года написать через switch. */

function getMonthSeason(n){

    let getMonth = Math.floor(n / 30) + 1,
        getSeason = '';

    if (getMonth > 0 && getMonth <= 12) {

    switch(getMonth){
        case 1:
        case 2:
        case 12:
            getSeason = 'Winter';
        break;
        case 3:
        case 4:
        case 5:
            getSeason = 'Spring';
        break;
        case 6:
        case 7:
        case 8:
            getSeason = 'Summer';
        break;
        case 9:
        case 10:
        case 11:
            getSeason = 'Autumn';
        break;
        default:
        break;
    }

    return `The month is ${getMonth}. It is ${getSeason}.`
    } else {
        return 'Input a number from 1 till 365';
    }
}

console.log(getMonthSeason(356));


