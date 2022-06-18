const firebaseConfig = {

      apiKey: "AIzaSyD-qDn6t0StUwy7WgJKdDuq-O4dGRju5kQ",
    
      authDomain: "kwitter-922d9.firebaseapp.com",
    
      databaseURL: "https://kwitter-922d9-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-922d9",
    
      storageBucket: "kwitter-922d9.appspot.com",
    
      messagingSenderId: "540393580272",
    
      appId: "1:540393580272:web:96878638956df407688435"
    
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
