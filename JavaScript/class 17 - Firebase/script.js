
function signupUser() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((user) => {
            console.log(`User registered successfully.`, user);
        })
        .catch((e) => {
            console.error(e, 'something went wrong.');
        })
}