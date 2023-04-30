const get_last_sunday = () => {
	let result = new Date();
	while(true) {
		if (result.getDay() === 0) {
			break;
		}
		result.setDate(result.getDate() - 1);
	}
	result.setDate(result.getDate() - 7);
	return result;	
}

const date_shallow_copy = (date) => {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

const make_week_array = (last_sunday) => {
	let temp = date_shallow_copy(last_sunday);
	let result = [];
	result.push(last_sunday);
	for (let i = 0; i < 51; i++) {
		temp = date_shallow_copy(temp);
		temp.setDate(temp.getDate() - 7);
		result.unshift(temp)
	}
	return result;
}

let array1 = make_week_array(get_last_sunday());
array1.forEach(e => console.log(e.toLocaleDateString()));
console.log(`配列の要素数: ${array1.length}`);