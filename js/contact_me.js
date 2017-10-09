// Initialize Firebase
var config = {
    apiKey: xxxx
    authDomain: xxxx
    databaseURL: xxxx
    projectId: xxxx
    storageBucket: xxxx
    messagingSenderId: xxxx
  };
  firebase.initializeApp(config);

// reference messages collection
var messagesRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();
// console.log(123);

// get values
var name = getInputVal('name');
var email = getInputVal('email');
var message = getInputVal('message');
// console.log(firstname);

// save message
    saveMessage(name, email, message)

// show alert
document.querySelector('.alert').style.display = 'block';

// hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

// to reset inputs on the form
document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// function to save message to firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    });
}