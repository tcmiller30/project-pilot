async function loginHandler(event) {
    event.preventDefault();
//                                            wait for what id travis makes
    const userEmail = document.querySelector('#user-email');
    const userPassword = document.querySelector('#user-password');

    if (userEmail && userPassword) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(await response.json());
            alert(response.statusText);
        } 

    }

};


async function signupHandler(event) {
    event.preventDefault();
//                                           wait for what id travis makes
    const username = document.querySelector('#create-username').value.trim();
    const password = document.querySelector('#create-password').value.trim();

    if(username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            alert('You have successfully created a new user!')
        } else {
            alert(response.statusText)
        }
    }
};


document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.new-acc-form').addEventListener('submit', signupHandler);
