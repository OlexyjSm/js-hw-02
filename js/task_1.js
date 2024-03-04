// Задача 1: Фільтр Слів за Довжиною

// У вас є масив слів та число n. Створіть новий масив, що містить лише ті слова, які мають
// довжину більше n.
// 1.	 Використовуйте цикл для відбору слів за заданою умовою.
// 2.	 Задайте масив слів для перевірки.
// Приклад:
// const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"];
// const n = 5
// Очікуваний результат:
// ["banana", "orange"]



const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"];
const n = 5;
const resultArray = [];

for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > n) {
        resultArray.push(wordsArray[i]);
    }
}

console.log(resultArray);