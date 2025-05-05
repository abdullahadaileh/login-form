const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('user_name', name);
  localStorage.setItem('user_email', email);
  localStorage.setItem('user_password', password);

  Swal.fire({
    title: 'Saved!',
    text: 'Data was stored successfully.',
    icon: 'success',
    background: '#111',
    color: '#fff',
    confirmButtonColor: '#28a745',
    confirmButtonText: 'continue'
  }).then(() => {
    form.reset();
    window.location.href = 'index.html';
  });
});


const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 0.2,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(star => {
    ctx.font = `${star.radius * 10}px Arial`;
    ctx.fillText('.', star.x, star.y);

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
