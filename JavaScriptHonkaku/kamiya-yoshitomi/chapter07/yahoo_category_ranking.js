const create_td_with_image = url => {
	const td = document.createElement('td');
	const img = document.createElement('img');
	img.src = url;
	td.appendChild(img);
	return td;
}

const create_td_with_anchor = (value, url) => {
	const td = document.createElement('td');
	const a = document.createElement('a');
	a.href = url;
	const text = document.createTextNode(value);
	a.appendChild(text);
	td.appendChild(a);
	return td;
};

const create_td = value => {
	const td = document.createElement('td');
	const text = document.createTextNode(value);
	td.appendChild(text);
	return td;
};

const create_tr = (data) => {
	const tr = document.createElement('tr');
	const ranking_td = create_td(data.rank);
	const store_name_td = create_td(data.store.name);
	const item_name_td = create_td_with_anchor(data.name, data.url);
	const image_td = create_td_with_image(data.image.small);
	tr.appendChild(ranking_td);
	tr.appendChild(store_name_td);
	tr.appendChild(item_name_td);
	tr.appendChild(image_td);
	return tr;
};

document.addEventListener('DOMContentLoaded', function() {

	const ranking_body = document.getElementById('ranking-body');
	const data = {};
	const gender = document.getElementById('gender');
	const generation = document.getElementById('generation');


	document.getElementById('search').addEventListener('click', function() {
		if (gender) {
			data['gender'] = gender.value;
		}
		if (generation) {
			data['generation'] = generation.value;
		}
		console.log(data);
		ranking_body.textContent = '';

		fetch('https://shopping.yahooapis.jp/ShoppingWebService/V2/categoryRanking?appid=dj00aiZpPUswR1hWTnJFV1ZCMCZzPWNvbnN1bWVyc2VjcmV0Jng9YjU-')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`${response.staus} ${response.statusText}`);
				}
				return response.json();
			})
			.then(data => {
				console.log(data);
			});


		/*
		$.ajax({  // サーバサイドの呼び出し
			type: 'GET',
			url: 'yahoo_category_server.php',
			timeout: 10000,  // 10秒待つ
			data: data,
			dataType: 'json'   // どのタイプのデータか指定。
		})
		.done(function(response, textStatus, jqXHR) { // サーバーの処理が成功した場合
			const ranking_data = response['category_ranking']['ranking_data'];
			for (const data of ranking_data) {
				const tr = create_tr(data);
				ranking_body.appendChild(tr);
			}

		})
		.fail(function(jqXHR, textStatus, errorThrown) { // サーバーの処理が失敗した場合
			console.log('サーバ側でエラーが発生');
			console.log(textStatus);
		})
		.always(function($data_or_jqXHR, textStatus, jqXHR_or_errorThrown){ // 成功失敗にかかわらす実行
			console.log('処理終了');
		});
		*/
	});
});
