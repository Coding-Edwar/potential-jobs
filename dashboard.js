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