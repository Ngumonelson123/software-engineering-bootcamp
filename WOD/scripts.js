document.addEventListener('DOMContentLoaded', () => {

  const colorBox = document.getElementById('color-box');
  const changeBtn = document.getElementById('change-color-btn');
  const currentColorLabel = document.getElementById('current-color');

  // Function to generate random color
  function getRandomColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color.padStart(6, '0');
  }

  // Change color when button is clicked
  changeBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    currentColorLabel.textContent = "Current: " + newColor;
  });

});
