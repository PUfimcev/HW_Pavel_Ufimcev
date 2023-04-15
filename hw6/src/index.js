/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на  ! с помощью глобального поиска и замены.*/
console.log('Task 1');
function str1(str){
    if(!str) return;
    str = str.replace(/@/g, '!');
    // str = str.replaceAll('@', '!');
    return str;
}

console.log(str1('aaa@bbb@ccc'));
console.log('\n');

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. */
console.log('Task 2');
function transDate(date){
    if(!date) return;
    let newDate = date.replace(/\-/g, '/');
    return newDate;
}
console.log(transDate('2025-12-31'));
console.log('\n');

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).*/
console.log('Task 3')
function cutStr(str){
    if(!str) return;
    let newStr1 = str.substr(2, 14),
        newStr2 = str.substring(2, 5),
        newStr3 = str.slice(6, str.length-1);

    return `${newStr1}\n${newStr2}\n${newStr3}`;
}
console.log(cutStr('Я учу javascript!'));
console.log('\n');

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/
console.log('Task 4')
function getResult(arr){
    if(arr.length == 0 || !Array.isArray(arr)) return;
    let result = 0,
        sum = 0;
    for (let i = 0; i < arr.length; i++){
        arr[i] = Math.pow(arr[i], 3);
        sum += arr[i];
    }
    result = Math.pow(sum, 1/2);
    return +result.toFixed(2);
}

console.log(getResult([4, 2, 5, 19, 13, 0, 10]));
console.log('\n');

let res = +Math.pow([4, 2, 5, 19, 13, 0, 10].map(elem => Math.pow(elem, 3)).reduce((res, cur) => res + cur), 1/2).toFixed(2);
console.log(res);
console.log('\n');


/*5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/
console.log('Task 5')

function getNum(...arg){
    let c = Math.abs(arg[0] - arg[1]);

    return c;
}

console.log(getNum(3, 5));
console.log(getNum(6, 1));
console.log('\n');

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/

console.log('Task 6')
const getDate = function(date){
    let dateCurr = new Date().toLocaleString('ru').split(', ').reverse().join(' ');
    console.log(dateCurr);

    date = new Date(date).toLocaleString('ru').split(', ').reverse().join(' ');
    console.log(date);

    let date1 = new Date().toLocaleString('eng').split(', ').reverse().map(elem => {if(elem.includes('/')) {
       return elem = elem.replace(/\//g, '.').split('.').map(elem1 => elem1.length == 1 ? '0' + elem1 : elem1).join('.');} else { return elem }
    }).join(' ').replace(' PM', '');

    console.log(date1);

};
getDate('1.9.2014');
console.log('\n');

/*7. Дана  строка 'aa aba abba abbba abca abea'.  Напишите  регулярку,  которая  
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
количество раз, буква 'a'.*/
console.log('Task 7')

function getStr(str){
    let regExp = /ab+a/gim;

    return str.match(regExp).join(' ');
}

console.log(getStr('aa aba abba abbba abca abea'));
console.log('\n');

/*8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.*/
console.log('Task 8');
function verifyPhone(numb){
    let regExp = /^\+\d{1,3}\s?\d{2,3}\s?\d{3}\-?\s?\d{2}\-?\s?\d{2}/gim;
    
    return  regExp.test(numb) ? true : false;
}

console.log(verifyPhone('+375 17 366 45 45'));

console.log('\n');

/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме 
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. 
Функция должна возвращать true или false. Используйте регулярные 
выражения.*/
console.log('Task 9');

function validMail(mail){
    let regExp = /^\D[\w]{2,}\@[\w\-]{2,11}\.[A-Za-z]{2,11}$/gim;
    
    return  regExp.test(mail) ? true : false;
}

console.log(validMail('a123@mail12.com'));

console.log('\n');

/*10. Напишите ф-цию, которая из полного адреса с параметрами и без, 
например: https://tech.onliner.by/2018/04/26/smart-do-200/? 
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес 
доменного имени (https://tech.onliner.by), остальную часть адреса без 
параметров (/2018/04/26/smart-do-200/), параметры 
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе 
может и не быть каких-либо составляющих. Ф-ция должна возвращать 
массив.*/
console.log('Task 10');

function splitAddr(address, callback){
    console.log(address);
    let arrAddr = [];
    let domain = address.match(/^https:\/{2}[\w.]+/gi),
        pathname = address.match(/\/{1}[a-z0-9\/\w\-]+\/{1}/gi),
        query = address.match(/\?[\w=&]+/gi),
        hash = address.match(/\#[\w]+/gi);

    arrAddr = arrAddr.concat(domain, pathname, query, hash).filter(elem => elem !== null);;
    
    callback(arrAddr);
}

splitAddr('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3',console.log);

