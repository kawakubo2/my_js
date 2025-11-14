document.addEventListener('DOMContentLoaded', () => {
    const url = 'http://localhost:3000/yahoo/api-yahoo-ranking.php';

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const ranking_data = data.high_rating_trend_ranking.ranking_data;
            console.log(ranking_data);
        });
});