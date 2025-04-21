const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('user_name', name);
  localStorage.setItem('user_email', email);
  localStorage.setItem('user_password', password);

  alert('Data saved to localStorage!');
  form.reset();
  window.location.href = 'index.html';
});
