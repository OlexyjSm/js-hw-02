// Задача 2: Об’єднання Масивів та Видалення Повторень

// Створіть два масиви чисел, обʼєднайте їх видаляючи при цьому всі повторення.
// 1.	 Використовуйте метод concat для об’єднання двох масивів.
// 2.	 Використовуйте цикл для видалення повторень.
// 3.	 Виведіть новий масив, де кожен елемент унікальний.
// Приклад:
// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [3, 4, 5, 6, 7];
// Очікуваний результат:
// [1, 2, 3, 4, 5, 6, 7]


const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];


const combinedArray = arrayA.concat(arrayB);


const uniqueArray = [];
for (let i = 0; i < combinedArray.length; i++) {
    if (!uniqueArray.includes(combinedArray[i])) {
        uniqueArray.push(combinedArray[i]);
    }
}

console.log(uniqueArray);