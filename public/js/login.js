async function loginHandler(event) {
    event.preventDefault();

    const userEmail = document.querySelector('#user-email');
    const userPassword = document.querySelector('#user-password');

    if (userEmail && userPassword) {
        const response = await fetch('/api/users/login')
    }
}