const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');



todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;
  
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }
  
    // Additional code to add the task will go here
    addTask(newTask); // Add the new task
    todoInput.value = ''; // Clear the input field after adding a task
  });

  function addTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);
  
    const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  listItem.appendChild(editButton);
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);
  
    todoList.appendChild(listItem);
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
      });

    checkBox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
      });
    // Event listeners for the checkbox and delete button will be added here

    editButton.addEventListener('click', function() {
        const isEditing = listItem.classList.contains('editing');
      
        if (isEditing) {
            // Switch back to view mode
            taskText.textContent = this.previousSibling.value; // Assuming the input field is right before the edit button
            listItem.classList.remove('editing');
            editButton.textContent = 'Edit';
        } else {
            // Switch to edit mode
            const input = document.createElement('input');
            input.type = 'text';
            input.value = taskText.textContent;
            listItem.insertBefore(input, taskText);
            listItem.removeChild(taskText);
            listItem.classList.add('editing');
            editButton.textContent = 'Save';
        }
      });
  }
 
 