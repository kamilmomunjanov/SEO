// console.log(a); // Выведет: undefined
// var a = 5;
// console.log(a); // Выведет: 5

// function f() {
//     return arguments
// }
//
//
//
// const func = () => {
//     return arguments
// }
//
// console.log(f())
// console.log(func())


// const func = () => {
//     console.log(this); // В этом случае, this равно глобальному объекту (например, window в браузере)
// }
//
// func();
//
// function outerFunction() {
//     const outerVariable = 'I am from the outer function';
//
//     function innerFunction() {
//         console.log(outerVariable); // innerFunction имеет доступ к outerVariable из родительской функции
//     }
//
//     return innerFunction;
// }
//
// const closureExample = outerFunction();
// closureExample(); // Выведет: I am from the outer function
//
//
// const x = [1,2,3]
// const y = [1,2,3]
// console.log(x.concat(y)[1]* 2 + y.length)
// console.log(5 >= "3")




// Добавляем элементы
// myMap.set('key1', 'value1');
// myMap.set(42, 'answer');
// myMap.set({ name: 'John' }, 'user');
//
// // Получаем значения по ключам
// console.log(myMap.get('key1')); // Результат: 'value1'
// console.log(myMap.get(42)); // Результат: 'answer'
// console.log(myMap.get({ name: 'John' })); // Результат: 'answer'
//
//
// myMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });

const prototypeObject = Object.prototype;
console.log(prototypeObject);



// const worker = new Worker('worker.js');
//
// worker.onmessage = function(event) {
//     console.log('Received message from worker:', event.data);
// };
//
// worker.postMessage('Hello from main script!');
//
// // Веб-воркер (worker.js)
// onmessage = function(event) {
//     console.log('Received message in worker:', event.data);
//     postMessage('Hello from worker!');
// };


// // Обычная функция
// function regularFunction() {
//     console.log(this);
// }
//
// // Стрелочная функция
// const arrowFunction = () => {
//     console.log(this);
// };
//
// regularFunction()
// arrowFunction()



// function* factorialGenerator() {
//     let result = 1;
//     let n = 1;
//
//     while (true) {
//         result *= n;
//         yield result;
//         n += 1;
//     }
// }
//
// const generator = factorialGenerator();
//
// console.log(generator.next().value); // 1
// console.log(generator.next().value); // 2
// console.log(generator.next().value); // 6
// console.log(generator.next().value); // 6
// console.log(generator.next().value); // 6

// function createPoint(x, y) {
//     // Объект точки
//     const point = {
//         // Приватные переменные для хранения координат
//         _x: 0,
//         _y: 0,
//
//         // Геттер для получения координаты x
//         get x() {
//             return this._x;
//         },
//
//         // Геттер для получения координаты y
//         get y() {
//             return this._y;
//         },
//
//         // Сеттер для установки координаты x
//         set x(value) {
//             // Убеждаемся, что значение неотрицательное
//             this._x = Math.max(0, value);
//         },
//
//         // Сеттер для установки координаты y
//         set y(value) {
//             // Убеждаемся, что значение неотрицательное
//             this._y = Math.max(0, value);
//         },
//     };
//
//     // Устанавливаем начальные координаты
//     point.x = x;
//     point.y = y;
//
//     // Возвращаем объект точки
//     return point;
// }
//
// const animal = {
//     makeSound: function() {
//         console.log("Generic animal sound");
//     }
// };
//
// // Создаем объект, наследующий свойства и методы от animal
// const cat = Object.create(animal);
//
// // Модифицируем метод для объекта cat
// cat.makeSound = function() {
//     console.log("Meow!");
// };
//
// // Вызываем метод объекта cat
// cat.makeSound(); // Вывод: Meow!
//
// // Если метод не найден в объекте cat, он ищется в его прототипе (animal)
// const dog = Object.create(animal);
// dog.makeSound(); // Вывод: Generic animal sound
//
// // Проверяем прототип объекта cat
// console.log(Object.getPrototypeOf(cat) === animal); // Вывод: true
//
// console.log(Error)
//
//
// const myMap = new Map();
//
// // Добавляем элементы в Map
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.set('key3', 'value3');
//
// console.log(myMap.size)
//
// for (let key of myMap.keys()) {
//     console.log(key)
// }
//
// for (let value of myMap.values()){
//     console.log(value)
// }
// console.log(Boolean(Array.prototype <= Object.prototype))
//
// console.log(Number.prototype)
//
//
// console.log('Start');
//
//
// function showThis() {
//     console.log(this); // В этом случае, this равно глобальному объекту (например, window в браузере)
// }
//
//
// console.log(showThis())
//
// const obj = {
//     name: 'Example',
//     showName: function() {
//         console.log(this.name); // this ссылается на объект obj
//     }
// };
//
// obj.showName();
//
// const arrowFunction = () => {
//     console.log(this); // this берется из окружающего контекста
// };
//
// arrowFunction();
// const ig = 10
//
// function outerFunction() {
//     const outerVariable = 'I am from the outer function';
//
//     function innerFunction() {
//         console.log(ig); // innerFunction имеет доступ к outerVariable из родительской функции
//     }
//
//     return innerFunction;
// }
//
// const closureExample = outerFunction();
// closureExample(); // Выведет: I am from the outer function


// console.log(Object.prototype === Function.prototype)
//
// console.log(Object.prototype.isPrototypeOf({text: "he"}));
//
// class Engine {
//     start() {
//         console.log('Двигатель запущен');
//     }
//
//     stop() {
//         console.log('Двигатель остановлен');
//     }
// }
//
// let engine = new Engine()
// console.log(engine)
//
//
// Array.prototype.customMethod = function() {
//     console.log("Custom method for arrays");
// };
//
// // Создание массива
// const myArray = [1, 2, 3];
//
// // Вызов расширенного метода из прототипа
// myArray.customMethod(); // Вывод: Custom method for arrays
//
// const obj = {};
// console.log(obj.constructor === Object);
// const num = 42;
// console.log(Object.getPrototypeOf(num) === Number.prototype);





