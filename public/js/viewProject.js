async function viewProjectHandler() {
    console.log("clicked view proj")
    const projectId = button.dataset.projectId;
    const response = await fetch(`api/project/${projectId}`, {
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