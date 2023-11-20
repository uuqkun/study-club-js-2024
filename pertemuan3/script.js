// Get the title element by its id
const titleElement = document.getElementById('title');

// Change the text content of the title
titleElement.textContent = 'Hello, DOM! (Updated)';

// Get the content element by its id
const contentElement = document.getElementById('content');

// Change the text content and style of the content
contentElement.textContent = 'This is an updated paragraph.';

// Add a click event listener to the button
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', function () {
  contentElement.classList.toggle('button-clicked');
});

const inputElement = document.getElementById('input');


// Add a keyup event listener to the input
inputElement.addEventListener('keyup', function (event) {
  const value = event.target.value;
  console.log(value);
});

