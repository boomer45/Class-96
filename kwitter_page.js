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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}