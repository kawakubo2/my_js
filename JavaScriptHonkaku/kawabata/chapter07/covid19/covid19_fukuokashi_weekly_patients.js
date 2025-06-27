let areas = ['福岡市東区', '福岡市博多区', '福岡市中央区', '福岡市西区',
                '福岡市南区', '福岡市城南区', '福岡市早良区']

let week_array;
/* 元データであるCSVファイルの位置(0始まり) */
const DATE = 4
const AREA = 7;
const AGE = 8;

/* 福岡市全体での先代別合計のためのキー */
const TOTAL = '合計';

/* [{'居住区': '福岡市博多区', '1歳未満': 10, ... '90歳以上': 18},...{'居住区': '福岡市城南区', ...}] */
let area_assoc;
let age_assoc; 

const rawdata_to_sorted_list = (raw_data) => {
	let temp = raw_data.split('\n').slice(1);
	let result = [];
	for (let i = 0; i < temp.length; i++) {
		let array = temp[i].split(/\s*,\s*/);
		array[DATE] = new Date(array[DATE]);
		result.push(array);
	}
	result.sort((e1, e2) => e1[DATE].getTime() - e2[DATE].getTime())
	return result;
}

const get_last_sunday = () => {
	let result = new Date(2021, 0, 1);
	result = new Date(result.getFullYear(), result.getMonth(), result.getDate(), 0, 0, 0, 0);

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

const init_area_assoc = () => {
    let result = [];
    for (let area of areas) {
        result[area] = {};
        for (let sunday_of_week of week_array) {
            result[area][sunday_of_week] = 0;
        }
    }
	result[TOTAL] = {};
	for (let sunday_of_week of week_array) {
		result[TOTAL][sunday_of_week] = 0;
	}
	return result;
}

const list_to_2dassoc = (sorted_list) => {
	let current_sunday = date_shallow_copy(get_last_sunday());
	current_sunday.setDate(current_sunday.getDate() + 7);
	let total = 0;
	let week_index = 0;
	for (let row of sorted_list) {
		if (row[0] === '') continue;
		if (week_array[0].getTime() - row[DATE].getTime() > 0) continue;
		if (current_sunday.getTime() - row[DATE].getTime() <= 0) break;
		if (areas.indexOf(row[AREA]) > -1) {
			if (row[DATE] >= week_array[week_index + 1]) week_index++;
			area_assoc[row[AREA]][week_array[week_index]] += 1;
			area_assoc[TOTAL][week_array[week_index]] += 1;
		}
	}
}

const area_assoc_to_age_assoc = (assoc_2d) => {
	let result = [];

	for (let area in assoc_2d) {
		let assoc = {};
		assoc['area'] = area;
		let age_assoc = assoc_2d[area];
		for (let age in age_assoc) {
			assoc[age] = age_assoc[age];
		}
		console.log(assoc);
		result.push(assoc);
	}
	return result;
};

const drawAreaLineChart = (area) => {
	let dataset = [];

	const padding = 40;

	document.getElementById('area_line_chart').textContent = '';
	const contents = d3.select('#area_line_chart');
	const svg = contents.append("svg");

	// グラフの幅
	let width = contents.node().clientWidth - padding;
	console.log("svgのwidth:" + width);
	// グラフの高さ
	let height = contents.node().clientHeight - padding;
	console.log("svgのheight:" + height);

	let week_assoc = area_assoc[area];

	console.log('week_assoc:');
	console.log(week_assoc);

	let timeparser = d3.timeParse("%Y/%m/%d");
	let format = d3.timeFormat("%Y/%m/%d");
	for (let week in week_assoc) {
		let a = { date: new Date(week).toLocaleDateString(), value: week_assoc[week]};
		dataset.push(a);
	}
	console.log('dataset=');
	console.log(dataset);
	dataset = dataset.map(function(d) {
		return  { date: timeparser(d.date), value:d.value } ;
	});

	// svg要素にg要素を追加しクラスを付与しxに代入
	x = svg.append("g")
	.attr("class", "axis axis-x");

	// svg要素にg要素を追加しクラスを付与しyに代入
	y = svg.append("g")
	.attr("class", "axis axis-y");

	// x軸の目盛りの量
	// let xTicks = (window.innerWidth < 768) ? 6: 12;
	let xTicks = week_array.length / 4;
	// X軸を時間のスケールに設定する
	xScale = d3.scaleTime()
	// 最小値と最大値を指定しX軸の領域を設定する
	.domain([
		// データ内の日付の最小値を取得
		d3.min(dataset, function(d){return d.date;}),
		// データ内の日付の最大値を取得
		d3.max(dataset, function(d){return d.date;})
	])
	// SVG内でのX軸の位置の開始位置と終了位置を指定しX軸の幅を設定する
	.range([padding, width - padding]);

	// Y軸を値のスケールに設定する
	yScale = d3.scaleLinear()
	// 最小値と最大値を指定しY軸の領域を設定する
	.domain([
		// 0を最小値として設定
		0,
		// データ内のvalueの最大値を取得
		d3.max(dataset, function(d){return d.value;})
	])
	// SVG内でのY軸の位置の開始位置と終了位置を指定しY軸の幅を設定する
	.range([height, padding]);

	// scaleをセットしてX軸を作成
	axisx = d3.axisBottom(xScale)
	// グラフの目盛りの数を設定
	.ticks(xTicks)
	// 目盛りの表示フォーマットを設定
	.tickFormat(format);

	// scaleをセットしてY軸を作成
	axisy = d3.axisLeft(yScale);

	// X軸の位置を指定し軸をセット
	x.attr("transform", "translate(" + 0 + "," + (height) + ")")
	.call(axisx);

	// Y軸の位置を指定し軸をセット
	y.attr("transform", "translate(" + padding + "," + 0 + ")")
	.call(axisy);



	//// 線を描画する
	let color = d3.rgb("#85a7cc");

	path = svg.append("path");

	line = d3.line()
	// lineのX軸をセット
	.x(function(d) { return xScale(d.date); })
	// lineのY軸をセット
	.y(function(d) { return yScale(d.value); });

	path
	// dataをセット
	.datum(dataset)
	// 塗りつぶしをなしに
	.attr("fill", "none")
	// strokeカラーを設定
	.attr("stroke", color)
	// d属性を設定
	.attr("d", line)
}



const make_theader = () => {
	let thead = document.getElementById('table-header');
	let tr = document.createElement('tr');
	let fragment = document.createDocumentFragment();
	let first_th = document.createElement('th');
	fragment.appendChild(first_th);
	for (let i = 0; i < week_array.length; i += 4) {
		let th = document.createElement('th');
		th.colSpan = 4;
		let text = document.createTextNode(week_array[i].toLocaleDateString());
		th.appendChild(text);
		fragment.appendChild(th)
	}
	tr.appendChild(fragment);
	thead.appendChild(tr);
};

const make_td = (age) => {
	let td = document.createElement('td');
	let text = document.createTextNode(age);
	td.appendChild(text);
	return td;
}

const make_area_th = (area) => {
	let area_th = document.createElement('th');
	let area_btn = document.createElement('input');
	area_btn.type="button";
	area_btn.className="area_btn";
	area_btn.value=area;
	area_th.appendChild(area_btn);
	return area_th;
}

const make_tbody = () => {
	let tbody = document.getElementById('table-body');
	tbody.textContent = '';
	let fragment = document.createDocumentFragment();
	for (let area in area_assoc) {
		let assoc = area_assoc[area];
		let tr = document.createElement('tr');
		tr.append(make_area_th(area));
		for (let week in assoc) {
			tr.append(make_td(assoc[week]));
		}
		fragment.appendChild(tr);
	}
	tbody.appendChild(fragment);
}

const make_table = () => {
	make_theader();
	make_tbody();	
};

const age_sort = (area) => {
	let age_assoc_list = [];
	let temp = area_assoc[area];
	for (let key in temp) {
		age_assoc_list.push({'name': key, 'value': temp[key]});
	}
	age_assoc_list.sort((e1, e2) => {
		return e2['value'] - e1['value'];
	});
	return age_assoc_list;
}

document.addEventListener('DOMContentLoaded', () => {


	/* 居住区がクリックされた場合の処理 --- pie chartの描画 */
	document.getElementById('table-body').addEventListener('click', function(e) {
		let btn = e.target;
		drawAreaLineChart(btn.value);
	});

	/* 検索ぼたんがクリックされた時の処理 */
	document.getElementById("btn").addEventListener("click",  (e) => {

		let f = '401307_city_fukuoka_covid19_patients.csv';
		let obj = new XMLHttpRequest();
		obj.open('get', f, false);
		obj.overrideMimeType('text/csv;charset=UTF-8');
		obj.onload = function() {
			try {
				////////////////////////
				// データの加工        //
				////////////////////////
				/* 日曜日の日付を52週分生成 */
				week_array = make_week_array(get_last_sunday());

				/* 
				居住区をキー、52週分の連想配列(キーが日付, 値が0)を値とする
				の集計用の連想配列の初期化
				*/
                area_assoc = init_area_assoc();
                console.log(area_assoc);
				let sorted_list = rawdata_to_sorted_list(this.responseText);	
				console.log(sorted_list.slice(0, 10));
				list_to_2dassoc(sorted_list);
                console.log(area_assoc);

				///////////////////////
				// 画面への出力       //
				///////////////////////
				// age_assoc = area_assoc_to_age_assoc(area_assoc);
                // console.log(age_assoc);

				make_table();

			} catch (e) {
				console.log(e);
				alert("解析失敗");
			}
		}
		obj.send(null);

		e.preventDefault();
	});
});