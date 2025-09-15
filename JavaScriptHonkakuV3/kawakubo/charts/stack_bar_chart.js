document.addEventListener('DOMContentLoaded',() => {
    // document.addEventListener();の内部に書くと以下はローカル変数になる。DOMtreeができてから呼び出すのでヘッダーの方から呼び出しても問題なし
    // const url = 'http://localhost:8080/reviewchart/barchartdata'; // TODO
    // const query = new URLSearchParams();
    // query.set('reviewMainId', document.querySelector('#reviewMainId2').value);
    // //RESTコントローラを呼び出し
    // fetch(`${url}?${query.toString()}`)
    //     .then(resp => resp.json()) //RESTコントローラからJSONデータを取得
    //     .then((reviewchartdata) => {
 
        // console.log(reviewchartdata);
 
        const ctx = document.getElementById('barChart');
 
        // // データとラベル
        // const labels = [];
        // const data = [];
 
        // for (let rcd in reviewchartdata) {
        //     labels.push(rcd);
        //     data.push(reviewchartdata[rcd]);
        // }
 
        // 自動で色を割り当てる関数
        const generateColors = (n) => {
            const colors = [];
            for (let i = 0; i < n; i++) {
            const hue = (i * 360 / n) % 360; // 色相を均等に分配
            colors.push(`hsl(${hue}, 70%, 60%)`);
            }
            return colors;
        };
 
        // ChartDataLabels を登録
        Chart.register(ChartDataLabels);
 
       
        const DATA_COUNT = 2;
        const data_labels = ["要件定義漏れ", "ヒアリングミス"];
 
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['１回','２回','３回'],
                datasets: [
                    {
                        label: "A",
                        data: "30",
                        backgroundColor: "red",
                        stack: 'Stack 0',
                    },
                    {
                        label: "B",
                        data: "20",
                        backgroundColor: "yellow",
                        stack: 'Stack 0',
                    },
                    {
                        label: "C",
                        data: "10",
                        backgroundColor: "blue",
                        stack: 'Stack 0',
                    },
                    {
                        label: "A",
                        data: "18",
                        backgroundColor: "red",
                        stack: 'Stack 1',
                    },
                    {
                        label: "B",
                        data: "10",
                        backgroundColor: "yellow",
                        stack: 'Stack 1',
                    },
                    {
                        label: "C",
                        data: "8",
                        backgroundColor: "blue",
                        stack: 'Stack 1',
                    },
                    {
                        label: "A",
                        data: "5",
                        backgroundColor: "red",
                        stack: 'Stack 2',
                    },
                    {
                        label: "B",
                        data: "3",
                        backgroundColor: "yellow",
                        stack: 'Stack 2',
                    },
                    {
                        label: "C",
                        data: "2",
                        backgroundColor: "blue",
                        stack: 'Stack 2',
                    },
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart.js Bar Chart - Stacked'
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        });
    });
// });
 