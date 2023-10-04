
const newTaskInput = document.getElementById('nouvelletache');
const taskList = document.getElementById('listetaches');


function nouvelletache() {  
    const taskDescription = newTaskInput.value;

    
    if (taskDescription.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
           
            taskItem.classList.toggle('completed', checkbox.checked);
        });


        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = taskDescription;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', function () {
         
            taskItem.remove();
        });

        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(descriptionSpan);
        taskItem.appendChild(deleteButton);

        
        listetaches.appendChild(taskItem); 

        
        
    }
}
