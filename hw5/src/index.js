let c = console.log.bind(this);
console.log('Task 1');

/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на 
третье. Числа передаются параметром.*/

function getResult(num1, num2, num3){
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) ) return 'Enter number';
    return (num1 - num2) / num3;
}

c(getResult(5, 2, 4));
c('\n');

console.log('Task 2');
/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число 
передается параметром.*/

function getCube(n) {
    if (isNaN(n)) return 'Enter number';
    return `${Math.pow(n, 3)} ${Math.pow(n, 2)}`;
}

c(getCube(2));
c('\n');
console.log('Task 3');
/*3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

function max(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return 'Enter number';
    if (num1 === num2) return 'Numbers are equal';

    return (num1 > num2) ? `Num ${num1} is max`: `Num ${num2} is max`
}

c(max(4,3));

function min(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return 'Enter number';
    if (num1 === num2) return 'Numbers are equal';

    return (num1 > num2) ? `Num ${num2} is min`: `Num ${num1} is min`
}

c(min(4,3));
c('\n');
console.log('Task 4');
/*4. Напишите две функции: первая ф-ция должна возвращать массив с 
числовыми значениями, диапазон которых должен вводиться пользователем 
с клавиатуры; вторая – выводить полученный массив.*/

function getArr(lenArr, outArr){
    let arr = [];
    if(isNaN(lenArr) || lenArr <= 0 || !lenArr) {
        outArr('Enter number more than 0');
    } else {

        for (let i = 1; i <= lenArr; i++){
            arr.push(i);
        }
        outArr(arr);
    }
}

function outputArr(arr){
    console.log(arr);
}

getArr(3, outputArr);
c('\n');

console.log('Task 5');
/*5. Сделайте функцию isEven() (even - это четный), которая параметром 
принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
функция возвращает true, если нечетное — false.*/

const isEven = function(num){
    if(isNaN(num) || !num) return 'Enter number';

    num = Math.round(num);
    return num % 2 ? 'Number is odd' : 'Number is even';
}
c(isEven('8.2'));
c('\n');

console.log('Task 6');
/*6. Напишите ф-цию, в которую передается массив с целыми числами. 
Верните новый массив, где останутся лежать только четные из этих чисел. 
Для этого используйте вспомогательную функцию isEven из предыдущей 
задачи.*/

function getArrEven(arr, isEven) {
    if (arr.length == 0 || !Array.isArray(arr)) return;
    let evenArray = arr.filter(elem => {
        return isEven(elem) == 'Number is even';
    })

    return evenArray;
}

c(getArrEven([2,3,4,5,6,7,8,9,10,11], isEven))
c('\n');
console.log('Task 7');
/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные 
циклы):
1 
22 
333 
4444 
55555 
666666 
7777777 
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. 
параметр, непредусмотренный ф-цией по умолчанию - один любой символ, 
кроме пробела, то пирамида должна быть нарисована этим символом, 
например: 
* 
** 
*** 
**** 
***** 
****** 
******* 
******** 
********* */

function getPiram(n){
    let piram = '';

    for (let i = 1; i <= n; i++){
        for (let j = 0; j < i; j++){
            piram += (arguments[1]) ? `${arguments[1]}` : `${i}`;
        }
        piram += '\n';
    }
    return piram;
}

c(getPiram(9));
c(getPiram(9, '*'));

c('\n');
console.log('Task 8');
/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из 
звездочек:
    * 
   *** 
  ***** 
 ******* 
********* 
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник. */

function getFigur(h){
    let figur = '',
        figur2 = '';

    for(let i = 0; i < h; i++){
        let star = '',
            empty = '';
        for(let j = h - 1 - i; j > 0; j--){
            empty += ' ';
        }
        for(let k = 0; k < 2*i + 1; k++){
            star += '*';
        }

        figur += `${empty}${star}\n`
    }

    for(let i = h; i > 0; i--){
        let star = '',
            empty = '';
        for(let j = 0; j < h - i; j++){
            empty += ' ';
        }
        for(let k = 2*i - 1; k > 0; k--){
            star += '*';
        }

        figur2 += `${empty}${star}\n`
    }


    return `${figur}${figur2}`;
}

c(getFigur(6));
c('\n');
console.log('Task 9');
/*9. Напишите ф-цию, которая возвращает массив заполненный числами 
Фибоначи от 0 до 1000.*/

function fibArr(arr = [0, 1], i = 0){

    i++
    let num  = arr[i] + arr[i - 1];
    if (num < 1000){
        arr.push(num);
        return fibArr(arr, i);
    } else {

        return arr;
    }

}

c(fibArr());

function fibArr2(){
    
    let arr2 = [];
    for(let i = 0;; i++) {
        if(i == 0) {
            arr2 = [0, 1];
            
        } else {

            let num2 = arr2[i] + arr2[i-1];
            if(num2 < 1000) {
                arr2.push(num2);
            } else {
                return arr2;
            }
        }
    }

}

c(fibArr2());
c('\n');

console.log('Task 10');
/*10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее). Исп. Рекурсию.*/
function toOne(num){
    if(isNaN(num) || !num) return 'Enter number';
    num = num + '';
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        sum += +num.at(i);
    }

    if(sum > 9) {
        return toOne(sum);
    } else {
        return sum;
    }
}

c(toOne(34578));

c('\n');

console.log('Task 11');
/*11. Дан массив с числами (передается параметром). Выведите 
последовательно его элементы, используя рекурсию и не используя цикл.*/
function recurseArr(arr, i = 0){
    if (arr[i] == undefined || arr.length == 0) return;
    console.log(arr[i]);
    i++
    recurseArr(arr, i);
}
recurseArr([2,3,4,5,6]);
c('\n');

console.log('Task 12');
/*12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер 
группы студента и выводящую введённые данные в следующем виде:
***************************** 
* Домашняя работа: «Функции» * 
* Выполнил: студент гр. W4017  * 
* Иванов Иван Иванович             * 
***************************** 
Размер рамки должен определятся автоматически по самой длинной строке. 
Рамку вывести в консоль. */

function card(){
    let card = '',
        surname = prompt('Enter your surname');
        firstName = prompt('Enter your first name'),
        patronymic = prompt('Enter your patronymic'),
        group = prompt('Enter your group');
        c(isNaN(surname));
        if (!isNaN(surname) || !surname || !isNaN(firstName) || !firstName || !isNaN(patronymic) || !patronymic || !group) {
            alert('Enter correct or full  data');
            return;
        }

        let str1 = `* Домашняя работа: "Функции"`,
            str2 = `* Выполнил: студент гр. ${group}`,
            str3 = `* ${surname} ${firstName} ${patronymic}`,
            maxStr = Math.max(str1.length, str2.length, str3.length),
            strgUpDown = '*'.repeat(maxStr + 2);

            str1 = str1.padEnd(maxStr+1, ' ') + '*';
            str2 = str2.padEnd(maxStr+1, ' ') + '*';
            str3 = str3.padEnd(maxStr+1, ' ') + '*';
        

    card = strgUpDown + '\n' + str1 + '\n' + str2 + '\n' + str3 + '\n' + strgUpDown;
    
    return card;
}

// c(card());

c('\n');


console.log('Task 13');
/*13. Напишите ф-цию, которая должна проверить правильность ввода адреса 
эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме 
одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
быть первыми и последними в адресе, и идти подряд, например: «..», «@.», 
«.@» или «@@», «_@», «@-», «--» и т.п. 
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
имя может содержать только буквы, цифры, но не быть первыми и 
единственными в имени, и точку; 
c. после последней точки и после @, домен верхнего уровня (ru, by, com и 
т.п.) не может быть длиной менее 2 и более 11 символов. */

function verifyMail(mail){
    let verify = true;
    for (let i = 0; i < mail.length; i++) {

        if (mail.at(i).charCodeAt() >= 1040 && mail.at(i).charCodeAt() <= 1103) verify = false;

        if(mail.indexOf('@') == -1 || mail.indexOf('@') == mail.length-1 || mail.indexOf('@') <= 2 || mail.indexOf('@') != mail.lastIndexOf('@')) verify = false;

        if(mail.indexOf('@') == 0 || mail.indexOf('-') == 0 || mail.indexOf('_') == 0 || mail.indexOf('.') == 0 || mail.lastIndexOf('@') == mail.length-1 || mail.lastIndexOf('-') == mail.length-1 || mail.lastIndexOf('_') == mail.length-1 || mail.lastIndexOf('.') == mail.length-1) verify = false;

        if((mail.length-1 - mail.lastIndexOf('.')) <= 2 || (mail.length-1 - mail.indexOf('@')) >= 11) verify = false;
        
    }
    let count = 0;
    for (let j = 0; j < mail.indexOf('@'); j++){

        if(!isNaN(mail.at(j))) count++;
        if(count == mail.indexOf('@')) verify = false;
    }
    console.log(count)
    console.log(mail.indexOf('@'))

    return (verify) ? 'Email is correct' : 'Email is wrong';


}
c(verifyMail('111aa@sdd.com'));
