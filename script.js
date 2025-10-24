const clickBtn = document.getElementById('clickBtn');
const questionDiv = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const imageContainer = document.getElementById('imageContainer');

clickBtn.addEventListener('click', () => {
  clickBtn.style.display = 'none';
  questionDiv.classList.remove('hidden');
});

yesBtn.addEventListener('click', () => {
  imageContainer.innerHTML = `
    <img src="images/yes.png" alt="Yes Image">
    <p>Wah! Aap kay toothpaste main namak hai! 🧂😄</p>
  `;
});

noBtn.addEventListener('click', () => {
  imageContainer.innerHTML = `
    <img src="images/no.png" alt="No Image">
    <p>Afsos! Aap kay toothpaste main namak nahi hai 😢</p>
  `;
});
