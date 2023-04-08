const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#projectName').value.trim();
    const description = document.querySelector('#projectDescription').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
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

  document
  .querySelector('#projectForm')
  .addEventListener('submit', newFormHandler);
