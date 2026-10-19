const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
const fruitToAdd = document.getElementById('fruit-to-add');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const fruitName = fruitToAdd.value.trim();
    if (fruitName === '') return;

    const newLi = document.createElement('li');
    newLi.className = 'fruit';

    const newLiText = document.createTextNode(fruitName);
    newLi.appendChild(newLiText);

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';

    // edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    newLi.appendChild(deleteBtn);
    newLi.appendChild(document.createTextNode(' '));
    newLi.appendChild(editBtn);

    fruits.appendChild(newLi);

    fruitToAdd.value = '';
});

fruits.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const fruit = e.target.parentElement;
        fruits.removeChild(fruit);
    }

    if (e.target.classList.contains('edit-btn')) {
        const fruit = e.target.parentElement;
        const currName = fruit.firstChild.textContent.trim();
        const updatedName = prompt('Edit fruit name:', currName);

        if (updatedName !== null && updatedName.trim() !== '') {
            fruit.firstChild.textContent = updatedName.trim();
        }
    }
});


