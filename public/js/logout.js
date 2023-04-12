async function logoutHandler() {
    const response = await fetch('api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert (response.statusText);
    }
}


document.querySelector('.logout-btn').addEventListener('click', logoutHandler);
