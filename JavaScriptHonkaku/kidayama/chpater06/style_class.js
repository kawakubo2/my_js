document.addEventListener('DOMContentLoaded', function() {
   const elem = document.getElementById('elem');
   elem.addEventListener('mouseover', function(){
        this.className = 'highlight';
   });
   elem.addEventListener('mouseout', function() {
        this.className = '';
   });
});