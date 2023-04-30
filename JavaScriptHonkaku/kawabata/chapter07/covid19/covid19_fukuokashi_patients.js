let areas = ['福岡市東区', '福岡市博多区', '福岡市中央区', '福岡市西区',
                '福岡市南区', '福岡市城南区', '福岡市早良区']

let ages = ['1歳未満', '10歳未満', '10代', '20代', '30代', '40代', 
            '50代', '60代', '70代', '80代', '90歳以上'];

/* 元データであるCSVファイルの位置(0始まり) */
const AREA = 7;
const AGE = 8;

/* 福岡市全体での先代別合計のためのキー */
const TOTAL = '合計';

/* [{'居住区': '福岡市博多区', '1歳未満': 10, ... '90歳以上': 18},...{'居住区': '福岡市城南区', ...}] */
let area_assoc;
let age_assoc; 

const rawdata_to_list = (raw_data) => {
	return raw_data.split('\n').slice(1);
}

const init_area_assoc = () => {
    let result = [];
    for (let area of areas) {
        result[area] = {};
        for (let age of ages) {
            result[area][age] = 0;
        }
    }
	result[TOTAL] = {};
	for (let age of ages) {
		result[TOTAL][age] = 0;
	}
	return result;
}

const list_to_2dassoc = (rawdata) => {
	let patients_data = rawdata_to_list(rawdata);
	let total = 0;
	for (let row of patients_data) {
		let patient = row.split(/\s*,\s*/);
		if (patient[0] === '') continue;
		if (areas.indexOf(patient[AREA]) > -1) {
			area_assoc[patient[AREA]][patient[AGE]] += 1;
			area_assoc[TOTAL][patient[AGE]] += 1;
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

const drawAreaPieChart = (age_sort_assoc, area, top = 4) => {
	let dataset;
	let remain_total = 0;
	/*
	for (let i = 0; i < top; i++) {
		let item = {};
		item['name'] = age_sort_assoc[i]['name'];
		item['value'] = age_sort_assoc[i]['value'];
		dataset.push(item);
	}
	*/
	dataset = age_sort_assoc.slice(0, top);
	for (let i = top; i < age_sort_assoc.length; i++) {
		remain_total += age_sort_assoc[i]['value'];
	}
	let remain = {};
	remain['name'] = 'その他';
	remain['value'] = remain_total;
	dataset.push(remain);
	console.log('pie char用dataset')
	console.log(dataset);
	/*
	 * 下記サイトから
	 * https://wizardace.com/d3-piechart/
	 */
	let width = 400; // グラフの幅
	let height = 300; // グラフの高さ
	let radius = Math.min(width, height) / 2 - 10;

	document.getElementById('age_pie_chart').textContent = '';

	// 2. SVG領域の設定
	let svg = d3.select("#age_pie_chart").append("svg").attr("width", width).attr("height", height);

	g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	// 3. カラーの設定
	let color = d3.scaleOrdinal()
	.range(['#4169e1', '#006400', '#00bfff', '#00ff00', '#ffd700']);

	// 4. pieチャートデータセット用関数の設定
	let pie = d3.pie()
	.value(function(d) { return d.value; })
	.sort(null);

	// 5. pieチャートSVG要素の設定
	let pieGroup = g.selectAll(".pie")
	.data(pie(dataset))
	.enter()
	.append("g")
	.attr("class", "pie");

	arc = d3.arc()
	.outerRadius(radius)
	.innerRadius(0);

	pieGroup.append("path")
	.attr("d", arc)
	.attr("fill", function(d) { return color(d.index) })
	.attr("opacity", 0.75)
	.attr("stroke", "white");

	// 6. pieチャートテキストSVG要素の設定
	let text = d3.arc()
	.outerRadius(radius - 30)
	.innerRadius(radius - 30);

	pieGroup.append("text")
	.attr("fill", "black")
	.attr("transform", function(d) { return "translate(" + text.centroid(d) + ")"; })
	.attr("dy", "5px")
	.attr("font", "10px")
	.attr("text-anchor", "middle")
	.text(function(d) { return d.data.name; });
}



const make_theader = () => {
	let thead = document.getElementById('table-header');
	let tr = document.createElement('tr');
	let fragment = document.createDocumentFragment();
	let first_th = document.createElement('th');
	let text = document.createTextNode('居住区');
	first_th.appendChild(text);
	fragment.appendChild(first_th);
	for (let age of ages) {
		let th = document.createElement('th');
		let text = document.createTextNode(age);
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
	for (let assoc of age_assoc) {
		let tr = document.createElement('tr');
		let first = true;
		for (let age in assoc) {
			if (first) {
				tr.append(make_area_th(assoc[age]));
				first = false;
				continue;
			}
			// assocのキー(年齢)の中にagesに含まれないものがある場合は無視する
			if (ages.indexOf(age) > -1) {
				tr.append(make_td(assoc[age]));
			}
		}
		fragment.appendChild(tr);
	}
	tbody.appendChild(fragment);
}

const make_table = () => {
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

	make_theader();
	/* 居住区がクリックされた場合の処理 --- pie chartの描画 */
	document.getElementById('table-body').addEventListener('click', function(e) {
		let btn = e.target;
		drawAreaPieChart(age_sort(btn.value), 4);
	});

	/* 年齢ボタンがクリックされたときの処理 */
	document.getElementById('table-header').addEventListener('click', (e) => {
		let that = e.target;
		// if (!that.classList.contains('age-btn')) return;
		let age = that.value;
		console.log(age + 'がクリックされた');
		age_assoc.sort((r1, r2) => {
			return r2[age] - r1[age];
		});
		make_tbody();
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
                area_assoc = init_area_assoc();
                // console.log(area_assoc);
				list_to_2dassoc(this.responseText);	

				///////////////////////
				// 画面への出力       //
				///////////////////////
				age_assoc = area_assoc_to_age_assoc(area_assoc);
                console.log(age_assoc);

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