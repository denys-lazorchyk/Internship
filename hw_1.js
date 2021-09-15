const solveEquesion = function (arr) {
	let log = "Equation: |";
	let equation;
	const equationTemplate = ["x^2", "x", ""];

	equation = arr
		.map((el, index) => {
			if (!el) return "";

			return `${Math.sign(el) > 0 ? "+" : "-"} ${
				Math.abs(el) > 1 ? Math.abs(el) : ""
			}${equationTemplate[index]} `;
		})
		.join("")
		.replace(/^\+\s|\s+$/g, "")
		.replace(/^\-\s/, "-");
	log += `${equation}\n`;

	const [a, b, c] = [...arr];
	const delta = b ** 2 - 4 * a * c;

	log += `Delta: ${delta}\nSolutions:\n`;

	if (delta < 0) log += " none";

	if (!delta) {
		log += ` x1 = ${-b / (2 * a)}`;
	}

	//for cases like: [0,-4,4]:
	if (delta > 0 && a == 0) {
		log += ` x1 = ${-c / b}\n`;
	}

	if (delta > 0 && !!a) {
		const rootDelta = delta ** (1 / 2);
		log += ` x1 = ${-b + rootDelta / (2 * a)}\n`;
		log += ` x2 = ${-b - rootDelta / (2 * a)}`;
	}

	console.log(log);
};

let ab = [1, 0, -4];

// solveEquesion(ab);
