document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('outer').addEventListener('mouseover', function(event) {
        document.getElementById('outer').style.background = 'lightblue';
    });
    document.getElementById('outer').addEventListener('mouseout', function(event) {
        document.getElementById('outer').style.background = '#CCC';
    });
});