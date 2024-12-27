// Counter
const counter = document.querySelector('.counter');
async function updateCounter() {
  const response = await fetch('/api/counter');
  const data = await response.json();
  counter.textContent = `Views: ${data.views}`;
}

updateCounter();
