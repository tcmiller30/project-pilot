async function viewProjectHandler() {
    const response = await fetch('api/project', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/project');
    } else {
        alert (response.statusText);
    }
}


document.querySelector('.view-project').addEventListener('click', viewProjectHandler);