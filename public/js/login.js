async function loginHandler(event) {
    event.preventDefault();
    const userEmail = document.querySelector('#loginEmail').value;
    const userPassword = document.querySelector('#loginPassword').value;
    console.log(userEmail, userPassword)
    if (userEmail && userPassword) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                userEmail,
                userPassword
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            console.log(await response.json());
            alert(response.statusText);
        } 

    }

};


async function signupHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
    const name = document.querySelector('#signupName').value.trim();
    console.log(email, password, name)
    if(name && password && email) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                name
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




document.querySelector('#pills-login').addEventListener('submit', loginHandler);
document.querySelector('#pills-signup').addEventListener('submit', signupHandler);
