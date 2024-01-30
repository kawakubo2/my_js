const employee = {
	name: "山田太郎",
	age: 28,
	salaries: {
		"1": 250000,
		"2": 260000,
		"3": 285000,
		"4": 250000,
		"5": 272000,
		"6": 282000
	}
};

const storage = localStorage;
storage.setItem("A1001", JSON.stringify(employee));

const employee1 = JSON.parse(localStorage["A1001"]);
console.log(employee1);
console.log(employee1['name']);
console.log(employee1['age']);
console.log(employee1['salaries']);