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
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}