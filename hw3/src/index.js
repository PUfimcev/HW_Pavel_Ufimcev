/*1. Выведите числа от 1 до 50 и от 35 до 8.*/

function outputNums(){
    let row1 = '',
        row2 = '';
    for (let i = 1; i < 50; i++) {
        row1 += i + ' ';
    }

    for (let i = 35; i > 8; i--) {
        row2 += i + ' ';
    }
    return row1 + '\n\n' + row2;
}

console.log(outputNums() + '\n');

/*2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку. */

function outputNums2(){
    let colm = '',
        i = 89;
    while(i > 11){
        colm += i + '\n'
        i--;
    }

    return colm;
}

console.log(outputNums2() + '\n');


/*3. С помощью цикла найдите сумму чисел от 0 до 100. */

function getSumNum(){
    let sum = 0;
    for (let i = 0; i <=100; i++){
        sum += i;
    }
    return sum;
}
console.log(getSumNum());
console.log('\n');

function getSumNumRec(n){
    if (n == 1) return 1;
    
    return n + getSumNumRec(n - 1);
}
console.log(getSumNumRec(100));
console.log('\n');

/*4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).*/ 

function getSumNum2(n){
    let num = '';

    for (let i = 1; i <= n; i++){

        let sum = 0;

        for (let j = 1; j <= i; j++){
            sum += j;
        }

        // num += 'Sum ' + i + ' = ' + sum + '\n';
        num += `Sum ${i} = ${sum} \n`;
    }

    return num;
}
console.log(getSumNum2(5) + '\n');


/*5. Выведите чётные числа от 8 до 56. Решить задание через while и for. */

function getEvenNums(){
    let oddNums = '',
        evenNums = '';
    for (let i = 8; i <= 56; i++){
        if (i % 2 == 0) continue;
        oddNums += i + ' ';
    } 
    let i = 8;
    while(i <= 56){
        if (!(i % 2)) evenNums += i + ' ';
        i++
    }
    return oddNums + '\n' + evenNums; 
}

console.log(getEvenNums());
console.log('\n');
/*6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде: 
2*2 = 4 
2*3 = 6 
2*4 = 8 
2*5 = 10 
... 
3*1=3 
3*2=6 
3*3=9 
3*4=12 
...  Для решения задачи используйте вложенные циклы. */

function sheetMulty(){
    
    let num = '';
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++){
            let result = i * j;
            num += `${i} * ${j} = ${result} \n`
            if(j == 10) num += '\n';
        }
    }
    return num;
}

console.log(sheetMulty());
console.log('\n');

/*7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет 
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых  для этого (итерация - это проход цикла), и запишите его в переменную num. */

function count(num){
    let count = 0;
    for (let i = num; i >= 50; i/=2){
        count++;
    }
    return count;
}

console.log(count(1000));
console.log('\n');

/*8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь может ввести отрицательное значение.*/ 

/*function getSum(){
    let sum = 0,
        midSum = 0;
    while(true){
        let num = +prompt('Enter a number', 0),
            count = 1;
        if(!isNaN(num)){
            count++
            sum += num;
            midSum = sum/count;
            if(!num) break;
        } else {
            alert(`You're wrong. Enter a number!`);
        }
    }
    return `Sum = ${sum} \nMidSum = ${midSum}`;

}
console.log(getSum());
console.log('\n');*/

/*9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, спользуя цикл. */

function strMaxMin(str){

    console.log(str.split(' ').reduce((res, cur) => res > cur ? res : cur));
    console.log(str.split(' ').reduce((res, cur) => res < cur ? res : cur));

    let max = Math.max(...str.split(' '));
    let min = Math.min(...str.split(' '));

    return `Max = ${max} \nMin = ${min}`;
}

console.log(strMaxMin('4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57'));
console.log('\n');

function var1strMaxMin(str){

    let num = '',
        max = +str.at(0),
        min = +str.at(0);
    if(str.length == 0) return;
    for (let i = 0; i < str.length; i++) {
        if(str.at(i) !== ' '){
            num += str.at(i);
            if(min > +num) min = +num;
            if(max < +num) max = +num;
        } else {
            num = '';
        }
    }


    return `Max = ${max} \nMin = ${min}`;
}

console.log(var1strMaxMin('4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57'));
console.log('\n');

/*10. Дано произвольное целое число n. Написать программу, которая: 
a. разбивает число n на цифры и выводит их на экран; 
b. подсчитывает сколько цифр в числе n; 
c. находит сумму цифр числа n; 
d. меняет порядок цифр числа n на обратный. 
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321. */

function actNum(numb){
    numb = numb + '';
    let fig = '',
        quant = numb.length,
        sum = 0,
        reverse = '';
    for (let i = 0; i < numb.length; i++) {
        fig += numb.at(i) + ' ';
        sum += +numb.at(i);
        reverse += numb.at(numb.length-1 - i);
    }

    return `Numbers: ${fig} Quantity: ${quant} Sum: ${sum} Reverse: ${reverse}`;
}

console.log(actNum(12345));