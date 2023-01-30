
var firebaseConfig = {
  apiKey: "AIzaSyDOFyotVWMAhpfj6kNBHRy1mLYWLFAoU7U",
  authDomain: "harmeet-f57b7.firebaseapp.com",
  databaseURL: "https://harmeet-f57b7-default-rtdb.firebaseio.com",
  projectId: "harmeet-f57b7",
  storageBucket: "harmeet-f57b7.appspot.com",
  messagingSenderId: "473959153331",
  appId: "1:473959153331:web:e2fb0b9e93ca2275e03ac6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function fetch(){
  var folder = document.getElementById("mnCdNPt").value;
     firebase.database().ref("folder").child(folder).once('value',
     function(allRecords){
         allRecords.forEach(
           function(currentRecord){
             var ganesh = currentRecord.val().question;
           }
         );
     });
}