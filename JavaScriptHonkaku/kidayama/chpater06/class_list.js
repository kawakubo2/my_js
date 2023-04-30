document.addEventListener('DOMContentLoaded', function() {
   const elem = document.getElementById('elem');
   elem.addEventListener('click', function() {
      /*
      if (this.classList.contains('highlight')) {
         this.classList.remove('highlight');
      } else {
         this.classList.add('highlight');
      }
      */

      this.classList.toggle('highlight');
   });
});