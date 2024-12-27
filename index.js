// Counter
const counter = document.querySelector('.counter');
async function updateCounter() {
  const response = await fetch(
    'https://oaczpt32rgouh5p4ztk3d37xo40jwpbr.lambda-url.us-east-1.on.aws/'
  );
  const data = await response.json();
  counter.textContent = `Views: ${data.views}`;
}

updateCounter();
