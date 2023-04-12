// form handler for creating a new project
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#projectName').value.trim();
    const clientName = document.querySelector('#clientName').value.trim();
    const description = document.querySelector('#projectDescription').value.trim();
    const dueDate = document.querySelector('#projectDue').value.trim();
    const hours = document.querySelector('#projectHours').value.trim();
    const rate = document.querySelector('#projectRate').value.trim();
  
    // gathers user input for project data and then sends a POST request to the API endpoint
    console.log({name, clientName, description, dueDate, hours, rate});
    if (name && clientName && description && dueDate && hours && rate) {
      
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, clientName, description, dueDate, hours, rate }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('successfully created project!');
      } else {
        alert('Failed to create project');
      }
    }
  };

// event listener for the create project form
document
.querySelector('#projectForm')
.addEventListener('submit', newFormHandler);
