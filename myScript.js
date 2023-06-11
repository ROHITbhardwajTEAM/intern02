 // Get the containers and success message element
 const firstContainer = document.querySelector('.container');
 const secondContainer = document.querySelector('#second-container');
 const successMessage = document.querySelector('#success-message');

 // Add event listeners for the drag and drop functionality
 firstContainer.addEventListener('dragstart', dragStart);
 secondContainer.addEventListener('dragover', dragOver);
 secondContainer.addEventListener('drop', drop);

 // Function to handle the drag start event
 function dragStart(event) {
   // Set the data being dragged
   event.dataTransfer.setData('text/plain', event.target.textContent);

   // Change the appearance of the dragged item
   event.target.style.opacity = '0.4';
 }

 // Function to handle the drag over event
 function dragOver(event) {
   // Prevent default to allow drop
   event.preventDefault();
 }

 // Function to handle the drop event
 function drop(event) {
   // Prevent default to avoid opening the dropped element as a link
   event.preventDefault();

   // Get the data being dropped
   const data = event.dataTransfer.getData('text/plain');

   // Create a new item in the second container
   const newItem = document.createElement('div');
   newItem.className = 'item';
   newItem.textContent = data;

   // Append the new item to the second container
   secondContainer.appendChild(newItem);

   // Clear the dragged item's appearance
   const draggedItem = firstContainer.querySelector(`div[data-text="${data}"]`);
   draggedItem.style.opacity = '1';


 }

 // Function to reset the containers and success message
 function resetContainers() {
   secondContainer.innerHTML = '';
   successMessage.textContent = 'SUCCESFULL RESET';
 }