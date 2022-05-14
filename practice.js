
var firebaseConfig = {
    apiKey: "AIzaSyAM1BUxXEJWze7hmJ0SNUOvCOpncN4XygI",
    authDomain: "kwitter-e5d55.firebaseapp.com",
    databaseURL: "https://kwitter-e5d55-default-rtdb.firebaseio.com",
    projectId: "kwitter-e5d55",
    storageBucket: "kwitter-e5d55.appspot.com",
    messagingSenderId: "82270306059",
    appId: "1:82270306059:web:89b2e7b731fcad46e92c0e",
    measurementId: "G-BMDY8FQKLM"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}