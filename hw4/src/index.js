// additional task from last lesson
console.log('Additional task from last lesson \n');

function flatArrFunc(arr){
    let flatArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            for (let j = 0; j < arr[i].length; j++){
                flatArr.push(arr[i][j]);
            } 
        } else {
            flatArr.push(arr[i]);
        }
    }
    
    for (let i = 0; i < flatArr.length; i++) {
        
        if(Array.isArray(flatArr[i])){
            return flatArrFunc(flatArr);
        } 
    }
    return flatArr;

}

console.log(flatArrFunc([0, 1, [2, [3, [4, [5, [6, [7]]]]]], 8, 9, 10, [11]]));
console.log('\n');
console.log('Task 1');

let c = console.log.bind(this);
/*1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. */

function outputArr(arr){
    for (let elem of arr) {
        c(elem);
    }
}

outputArr([1, 2, 3, 4, 5]);
c('\n');

/*2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3. */
c('Task 2');
function outputArr2(arr){
    for (let elem of arr) {
        if (elem > -10 && elem < -3) {
            c(elem);
        }
    }
}

outputArr2([-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]);

c('\n');

/*3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите. */
console.log('Task 3');

function createArr1(){
    let arr1 = [],
        result = 0;
        
    for (let i = 23; i < 57; i++){
        arr1.push(i);
    }

    for (let elem of arr1){
        result +=elem;
    }
    return {arr1, result};
}

function createArr2(){
    let arr2 = [];
    
    let j = 23;
    while(j < 57){
        arr2.push(j);
        j++;
    }

    return arr2;
}

c(createArr1());
c(createArr2());

c('\n');

/*4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */
console.log('Task 4');

function outputFig(arr){
    for (let elem of arr) {
        if(elem[0] === '1' || elem[0] === '2' || elem[0] === '5'){
            c(elem);
        }
    }
}

outputFig(['10', '20', '30', '50', '235', '3000']);
c('\n');

/*5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. */
console.log('Task 5 -- see above on Docoment');

function outputDays(arr){
    for (let i = 0; i < arr.length; i++){
        (i != 5 && i != 6) ? document.write(`${arr[i]} `) : document.write(`<b>${arr[i]}</b> `);
    }

}

outputDays(['MON','TUE','WEN','THU','FRI','SAT','SAN'])

c('\n');

/*6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length. */
console.log('Task 6');

function getLastElem(arr) {
    arr.push('Victory');
    return arr.at(arr.length-1);
}

c(getLastElem([-2, -1, 5, 'THU','FRI', -6, 10, 7]));

c('\n');

/*7. Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран. */
console.log('Task 7');

/*function getArray(){
    let arr = [];
    while(true){
        let num = +prompt('Enter a number', Math.floor(Math.random()*100));
        if(!isNaN(num)) {

            if(!num) break;
            arr.push(num);

        } else {
            alert(`You're trying to enter no number. Please enter a number!`);
        }
    }
    c(arr);
    c('\n');
    arr.sort((a,b) => a - b);
    c(arr);

}

getArray();*/

c('\n');

/*8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse. */
console.log('Task 8');

c([12, false, 'Текст', 4, 2, -5, 0].reverse());

function reverseArr(arr){
    let i = 0;
    while(i < arr.length - 1 -i){

        let buff = arr.at(arr.length -1 - i);
        arr[arr.length - i - 1] = arr.at(i);
        arr[i] = buff;
        i++
    }
    c(arr);
}

reverseArr([12, false, 'Текст', 4, 2, -5, 0]);

c('\n');

/*9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]. */
console.log('Task 9');

function countNull(arr){
    let count = 0;
    for (let elem of arr) {
        if(elem === undefined) count++;
    }
    return count;
}

c(countNull([5, 9, 21, , , 9, 78, , , , 6]));

c('\n');

/*10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2]. */
console.log('Task 10');

function sum(arr){
    let sum = 0;
    for (let i = arr.indexOf(0)+1; i < arr.lastIndexOf(0); i++){
        sum += arr.at(i);
    }

    return sum;
}

c(sum([48,9,0,4,21,2,1,0,8,84,76,8,4,13,2]));
c(sum([1,8,0,13,76,8,7,0,22,0,2,3,2]));

c('\n');

/*11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране: */
console.log('Task 11');
 
function triangle(h) {
    let line = '',
        crown = '',
        trunk = '',
        lenCrown = 0,
        lenTrunk = 0;

    for (let i = 0; i < h; i++){
        let star = '',
            empty = '';
        for (let j = 1; j <= 2*i+1; j++){
            
            star += '*';
        }
        for (let k = h - 1; k > i; k--){
            
            empty += ' ';
        }
        lenCrown = star.length;
        crown += `${empty}${star} \n`;
    }

    for (let i = 0; i < Math.floor(h/2); i++){
        let star = '',
            empty = '';
        for (let j = 0; j <= Math.floor(h/2); j++){
            
            star += '*';
        }
        lenTrunk = star.length;
        for (let k = Math.floor((lenCrown-lenTrunk)/2); k > 0; k--){
            
            empty += ' ';
        }
        trunk += `${empty}${star} \n`;
    }

    line += `${crown}${trunk} \n`; 

    return line;
}
c(triangle(10));


 