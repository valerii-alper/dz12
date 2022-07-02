// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому 
// элементу копируемого массива.


const arr = [1, 2, "str", true, function f1() {}, 10];

function copy(list, func) {
	const newArr = list.slice();

	if(typeof func === "function") {
		for(let i = 0; i < newArr.length; i++) {
			if(typeof newArr[i] === "number") newArr[i] = func(newArr[i]);
		}
	}
	return newArr;
}

function mult(number) {
	return number *= 10;
}

newList = copy(arr, mult);
console.log(newList);

