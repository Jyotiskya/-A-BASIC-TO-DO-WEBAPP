const form = document.getElementById('form');
const input = document.getElementById('input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('list');

function addItem(event) {
	event.preventDefault();

	if (input.value === '') {
		alert('Please enter a task.');
		return;
	}

	const item = document.createElement('li');
	item.innerText = input.value;

	const removeButton = document.createElement('button');
	removeButton.innerText = 'X';
	removeButton.addEventListener('click', () => {
		item.remove();
	});

	const completeButton = document.createElement('button');
	completeButton.innerText = 'Complete';
	completeButton.addEventListener('click', () => {
		item.classList.toggle('completed');
	});

	item.appendChild(removeButton);
	item.appendChild(completeButton);
	list.appendChild(item);

	input.value = '';
}

addButton.addEventListener('click', addItem);

form.addEventListener('submit', addItem);
