// Function to update mood text and styles
function updateMood(mood) {
  const message = document.getElementById('message');
  const body = document.body;

  if (mood === 'happy') {
    message.textContent = 'Keep smiling! 😊 Life is good!';
    body.style.backgroundColor = '#d4fdd4';
  } else if (mood === 'sad') {
    message.textContent = "It's okay to feel down. Better days are coming 💙";
    body.style.backgroundColor = '#cce0ff';
  } else if (mood === 'angry') {
    message.textContent = 'Take a deep breath. Let it go. 🔥';
    body.style.backgroundColor = '#ffd6d6';
  }
}

// Add/remove custom mood tags
const addMoodBtn = document.getElementById('addMoodBtn');
const customMoods = document.getElementById('customMoods');

addMoodBtn.addEventListener('click', () => {
  const input = document.getElementById('customMoodInput');
  const moodText = input.value.trim();
  if (moodText === '') return;

  const li = document.createElement('li');
  li.textContent = moodText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.style.marginLeft = '10px';
  removeBtn.onclick = () => {
    customMoods.removeChild(li);
  };

  li.appendChild(removeBtn);
  customMoods.appendChild(li);
  input.value = '';
});
