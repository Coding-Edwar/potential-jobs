// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// let loginBtn = document.querySelector("#login-ui")
let uiConfig = {
  signInOptions : [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: "/index.html"
}
ui.start('#login-ui',uiConfig)

// TODO: Add SDKs for Firebase products that you want to use

// (function() {

//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCIqAD32z4vB-9byghSnHG7E0KdifO0vrc",
//     authDomain: "potential-jobs.firebaseapp.com",
//     projectId: "potential-jobs",
//     storageBucket: "potential-jobs.appspot.com",
//     messagingSenderId: "651341001162",
//     appId: "1:651341001162:web:4434e812bff7ded5159f33"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   // get elements
//   const name = document.getElementById('#name')
//   const password = document.getElementById('#password')
//   const btnLogin = document.getElementById('#btnLogin')
//   const btnSignUp = document.getElementById('#btnSignUp')
//   const btnLogout = document.getElementById('#btnLogout')

//   // add login event
//   btnLogin.addEventListener('click'e => {
//     const name = name.value
//     const pass = password.value
//     const auth = firebase.auth
//     // sign in
//     const promise = auth.singInWithEmailAndPassword(name, pass);
//     promise.catch(e => console.log(e.message))
//   })

// }());