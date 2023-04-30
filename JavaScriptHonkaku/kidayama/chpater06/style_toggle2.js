document.addEventListener('DOMContentLoaded', function() {
   const elem = document.getElementById('elem');
   elem.addEventListener('click', function() {
      const classes = this.className.split(' ');
      const index = classes.indexOf('highlight');
      if (index === -1) {
         classes.push('highlight');
      } else {
         classes.splice(index, 1);
      }
      this.className = classes.join(' ');
   });
});