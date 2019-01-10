
// // Using express: http://expressjs.com/
// var express = require('express');
// // Create the app
// var app = express();
//
// // Set up the server
// var server = app.listen(3000, listen);
//
// // This call back just tells us that the server has started
// function listen() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://' + host + ':' + port);
// }


var firebase = require('firebase');
var serviceAccount = require("./geodata1.json");



const app = firebase.initializeApp({
  apiKey: "AIzaSyCuHz32HydEyjzPnTgO6Fbw4PIcsTwTlBU",
  authDomain: "geodata1-27120.appspot.com",
  databaseURL: "https://geodata1-27120.firebaseio.com",
  storageBucket: "geodata1-27120.appspot.com",
  messagingSenderId: "363965061200"
 });

//firebase.initializeApp(serviceAccount);
const database = firebase.database(app);
var ref = database.ref("location"); // SELECT DATABASE ( undefined or location,etc)

ref.on("value", gotData, errData);

function errData(error) {
  console.log("Something went wrong.");
  console.log(error);
}

// The data comes back as an object
function gotData(data) {
  var geo = data.val();

  // Grab all the keys to iterate over the object
  var keys = Object.keys(geo);

    console.log(geo); // print to console

}
