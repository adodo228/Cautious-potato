const button = document.getElementById('explodeBtn');

button.addEventListener('click', (e) => {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 15; i++) { // more explosions
    createExplosion(centerX, centerY);
  }
});

function createExplosion(x, y) {
  const explosion = document.createElement('div');
  explosion.className = 'explosion';
  explosion.style.left = `${x + (Math.random() * 100 - 50)}px`;
  explosion.style.top = `${y + (Math.random() * 100 - 50)}px`;

  // random colors
  const colors = ['#ff6b6b', '#f8e473', '#6bffb8', '#6b83ff', '#e76bff', '#ffffff'];
  explosion.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(explosion);

  setTimeout(() => {
    explosion.remove();
  }, 1000);
}
