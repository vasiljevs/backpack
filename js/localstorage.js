const heading = document.querySelector('h1');

// set localStorage item
localStorage.setItem('name', 'Arthur');
localStorage.setItem('surname', 'Vasilyev');

// get from localStorage
const name = localStorage.getItem('name'),
surname = localStorage.getItem('surname');

// display items
heading.textContent = `User: ${name} ${surname}`;