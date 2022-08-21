//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAc4cNdj-9Ol_FrBdzw6l2gv4sX-hBBYzY",
      authDomain: "kwitter-6730f.firebaseapp.com",
      databaseURL: "https://kwitter-6730f-default-rtdb.firebaseio.com",
      projectId: "kwitter-6730f",
      storageBucket: "kwitter-6730f.appspot.com",
      messagingSenderId: "570547043300",
      appId: "1:570547043300:web:e4ec4a40fb96f10cbfa5f1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location ="kwitter.html";  

      

}
function send () {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })

      document.getElementById("msg").value = "";
}
