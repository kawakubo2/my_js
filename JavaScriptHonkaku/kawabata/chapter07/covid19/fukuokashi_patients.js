document.addEventListener("DOMContentLoaded", function() {
	//td要素を作成する関数（引数に指定したテキストをもつ）
	const create_td = (text) => {
		let td = document.createElement('td');
		let t = document.createTextNode(text);
		td.appendChild(t);
		return td;
	};

	let addresses = [ "福岡市博多区", "福岡市東区", "福岡市中央区"
		, "福岡市西区", "福岡市南区", "福岡市早良区", "福岡市城南区"];
	let ages = ["10歳未満", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代以上", "合計"];

	/*
	 * 居住地別・年代別の連想配列
	 */
	let summary;

	const initSummary = () => {
		summary = {};
		for (let address of addresses) {
			summary[address] = {};
			for (let age of ages) {
				summary[address][age] = 0  //直近公表日も0を格納しておいて問題ない？
			}
		}
		console.log(summary);
	}

	let d = document.getElementById("publisheddate"); // 入力日付の取得
	let result = document.getElementById("result"); // 通信ステータスを追加するためのresult要素の取得
	let infectedpersonlist = document.getElementById("infectedpersonlist"); // データを追加するためのinfectedpersonlist要素の取得
	let listheader = document.getElementById("listheader"); // データを追加するためのlistheader要素の取得

	const assoc2array = (summary_assoc) => {
		let result = [];
		for (let address of addresses) {
			let temp = summary_assoc[address];
			temp['address'] = address;
			result.push(temp);
		}
		return result;
	}

	const makeInfectedPersonTable = (infected_person_list, infected_person_summary_list) => {
		infected_person_list.textContent = '';
		infected_person_list.append(listheader);
		for (let address_summary of infected_person_summary_list) {
			let tr = document.createElement('tr');
			let address_td = create_td(address_summary['address']);
			tr.append(address_td);
			for (let age of ages) {
				let td = create_td(address_summary[age]);
				tr.append(td);
			}
			infected_person_list.append(tr);
		}
	};

	const drawAreaPieChart = (age_summary, age, top = 4) => {
		let dataset = [];
		let i;
		for (i = 0; i < top; i++) {
			let item = {};
			item['name'] = age_summary[i]['address'];
			item['value'] = age_summary[i][age];
			dataset.push(item);
		}
		let remain_total = 0;
		for (let j = i; j < age_summary.length; j++) {
			remain_total += age_summary[j][age];
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
//		let color = d3.scaleOrdinal()
//		.range(['#4169e1', '#006400', '#00bfff', '#00ff00', '#ffd700', '#ff1493', '#9932cc']);
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


	listheader.addEventListener('click', function(e) {
		let age = e.target.value;
		let summary_list = assoc2array(summary);
		console.log(summary_list);
		summary_list.sort((a1, a2) => {
			return a2[age] - a1[age];
		})
		console.log(summary_list);

		drawAreaPieChart(summary_list, age, 4);

		makeInfectedPersonTable(infectedpersonlist, summary_list);

	});

	const csv2assoc = (csv) => {
		let result = [];
		let lines = csv.split("\n");
		for (let line of lines) {
			let ary = line.split(",");
			let assoc = {};
			const published = 4;
			const area = 7;
			const age = 8;
			if (ary[0] === 'No' || ary[1] === '') continue;
			assoc['area'] = ary[area];
			assoc['published'] = ary[published];
			assoc['age'] = ary[age];
			result.push(assoc);
		}
		return result;
	}

	document.getElementById("btn").addEventListener("click", function(e) {
		//let data;
		let f = '../jsp/400009_pref_fukuoka_covid19_patients.csv';
		let obj = new XMLHttpRequest();
		obj.open('get', f, false);
		obj.overrideMimeType('text/csv;charset=UTF-8');
		obj.onload = function() {
			try {
				console.log(this.responseText);
				let data = csv2assoc(this.responseText);
				console.log(data);
				// ノードツリーの初期化
				result.textContent = '';
				infectedpersonlist.textContent = '';
				if (data === null) {
					// 感染者情報を取得できなかった場合には、エラーメッセージを表示
					result.textContent = '感染者情報を取得できませんでした。';
				} else {
					// 居住地別感染者数計上=============================================
					// 初期化
					initSummary();
					// 集計
					let ngData = 0;
					for (let row of data) {
							if (addresses.indexOf(row['area']) !== -1 && ages.indexOf(row['age']) !== -1) {
								summary[row['area']][row['age']] += 1;
								summary[row['area']]['合計'] += 1;
							} else {
								ngData += 1;
							}
					}
					console.log(summary);

					let summary_list = assoc2array(summary);

					makeInfectedPersonTable(infectedpersonlist, summary_list);
				}

			} catch (e) {
				console.log(e);
				alert("解析失敗");
			}
		}
		obj.send(null);

		e.preventDefault();
	});
});


