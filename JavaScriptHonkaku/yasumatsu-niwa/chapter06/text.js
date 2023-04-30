document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('result_text').textContent = 
        '<a href="http://www.wings.msn.to/">Wingsプロジェクト</a>';
    document.getElementById('result_html').innerHTML = 
//        '<a href="http://www.wings.msn.to/">Wingsプロジェクト</a>';
        '<div onclick="alert(\'Hello\');">ここをクリック</div>';
}, false);