const IMAGE_API_URL = "https://picsum.photos/200/300";
const TEXT_API_URL = "https://dummyapi.io/data/v1/user?limit=10";
const imageElement = document.getElementById("image");
const peopleHolder = document.querySelector("table");

// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest), в response должны быть реализованы методы json(), text() и желательно blob()
// Документация по fetch() - https://developer.mozilla.org/en-US/docs/Web/API/fetch
// Документация по XMLHttpRequest - https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
// Документация по Blob - https://developer.mozilla.org/ru/docs/Web/API/Blob

function myFetch(url, options) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(options ? options.method : "GET", url, true);

		// Тип ответа blob, нужен для метода blob(),
		if (url !== "https://picsum.photos/200/300")
			xhr.setRequestHeader("app-id", "6155fa5472aa4147002c1df3");
		// Раскомментировать для текстового API
		else xhr.responseType = "blob";

		// чтобы не писать километровый код для обработки ответа, проще блоб в текст перевести, чем наоборот

		xhr.onload = () => {
			resolve(new Response(xhr.response));
		};

		xhr.send();
	});
}

// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl, далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)
// Документация по FileReader - https://developer.mozilla.org/ru/docs/Web/API/FileReader и https://developer.mozilla.org/ru/docs/Web/API/FileReader/FileReader

myFetch(IMAGE_API_URL)
	.then((res) => {
		return res.blob();
	})
	.then((response) => {
		const reader = new FileReader();

		reader.readAsDataURL(response);
		reader.onload = () => {
			// Должна отобразиться картинка
			insertImage(reader.result);
		};
		// console.log(response);
	});

function insertImage(src) {
	imageElement.src = src;
}

myFetch(TEXT_API_URL)
	.then((res) => {
		return res.json();
	})
	.then((response) => {
		response.data.forEach((person) => {
			peopleHolder.insertAdjacentHTML(
				"beforeend",
				`
				<tr>
		    		<td>${person.firstName}</td>
		    		<td>${person.lastName}</td>
		    		<td>${person.id}</td>
		    		<td>${person.title}</td>
					<td><img src="${person.picture}" alt=""></td>
				</tr>
				`
			);
		});
		console.log(response);
	});
