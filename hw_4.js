// 1. Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersV1(from, to) {
	let temp = from;

	const id = setInterval(() => {
		if (temp === to) {
			clearInterval(id);
		}

		console.log(temp);
		temp++;
	}, 1000);
}

// printNumbersV1(1, 10);

function printNumbersV2(from, to) {
	console.log(from);
	if (from !== to) {
		setTimeout(() => printNumbersV1(from + 1, to), 1000);
	}
}
// printNumbersV2(1, 10);

// 2. Напишите часы с использованием setInterval (с выводом в консоль), при каждом новом выводе (каждую секунду) очищать сонсоль (console.clear)

function clock() {
	setInterval(() => {
		console.clear();
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		let seconds = new Date().getSeconds();
		let time = [hours, minutes, seconds].map((el) => (el < 10 ? "0" + el : el));
		console.log(`${time[0]}:${time[1]}:${time[2]}`);
	}, 1000);
}

// clock();
// Следующие задачи могут быть сложными, поэтому можно найти решение в интернете и разобрать, как они работают

// *3. Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд.
// Другими словами,
// когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(f, ms) {
	// Code here
}

// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// // *4. Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд.
// // Те вызовы, которые попадают в период «торможения», игнорируются.

// // Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

// function throttle(f, ms) {
// 	// Code here
// }

// function f(a) {
// 	console.log(a);
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано
