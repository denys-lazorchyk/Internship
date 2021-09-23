const task1 = function (num) {
	const primary = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
	let result = [];
	let counter = 0;
	let temp = num;

	while (temp > 1) {
		if (!(temp % primary[counter])) {
			temp = temp / primary[counter];
			result.push(primary[counter]);
			counter = 0;
		} else {
			counter++;
		}
	}

	return `${result.join("*")}=${num}`;
};

class Validator {
	// constructor() {}

	isEmail(email) {
		var re = new RegExp(/\S+@\S+\.\S+/);
		return re.test(email);
	}

	isUkrainianPhoneNumber(string) {
		const test = new RegExp(/\+380\d{9}/);
		return test.test(string);
	}

	isDate(date) {
		let checked = Date.parse(date);
		return !isNaN(checked);
	}
}

// console.log(task1(24));

let valid = new Validator();
// console.log(valid.isUkrainianPhoneNumber("+380976543210"));
// console.log(valid.isEmail("denyslazorchyk@gmail.com"));
// console.log(valid.isDate("2003-45-10"));
