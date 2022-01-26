var firebaseConfig = {
      apiKey: "AIzaSyDLEzRp6O6axD0CVEI90w39Ft1igyJLIT0",
      authDomain: "kwitter-15f8d.firebaseapp.com",
      databaseURL: "https://kwitter-15f8d-default-rtdb.firebaseio.com",
      projectId: "kwitter-15f8d",
      storageBucket: "kwitter-15f8d.appspot.com",
      messagingSenderId: "979499138332",
      appId: "1:979499138332:web:651f08739465b8f76a8ed9"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = " ";
}