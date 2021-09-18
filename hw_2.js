const task1 = function (arr1, arr2) {
	let arr = arr1.concat(arr2);
	let elems = {};

	arr.forEach((el) => {
		if (elems[el]) elems[el]++;
		else elems[el] = 1;
	});

	let biggest = Object.values(elems).reduce(
		(prev, curr, i, arr) => (curr > arr[prev] ? i : prev),
		0
	);

	return Object.keys(elems)[biggest];
};

const task2 = function (arr) {
	return Array.from(new Set(arr));
};

const task3 = function (arr) {
	let shorts = ["K", "M", "B"];

	let final = arr.map((el) => {
		let counter = 0;
		let result = el;

		while (counter < 3) {
			result = Math.round(Math.round(result) / 10) / 100;
			if (result < 1000) break;
			counter++;
		}
		if (result % 1 !== 0) result = result.toFixed(2);

		return result + shorts[counter];
	});

	return final;
};

// console.log(task1([1, 2, 3, 3, "a", "test"], ["test", 2, 7, "a", "a"]));
// console.log(task2([1, 2, 3, 3, 3, "a", "a", "test", "test"]));
// console.log(task3([111896, 9999, 9985, 1024, 999999, 1000100, 60044943]));
