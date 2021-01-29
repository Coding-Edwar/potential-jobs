function authStateListener() {
    // [START auth_state_listener]
    firebase.auth().onAuthStateChanged((user)=> {
        if (user){

            document.querySelector('#user')
                .innerHTML = `${user.displayName}`
            // console.log(user)
        } else {
        // user non-exist
        window.location.href = "/index.html"
        }
    })
}

function signOut() {
    firebase.auth().signOut().then(()=> {
        console.log(user)
    }).catch((error)) => {
        console.log("error!!!!")
    }
}