const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Mn4P7SAl5gguNQ4sCucZqfVnhC63y0cmqLSBlRPhSDPQeGaaaLtQR10DVLomuhxWqVZXkwMXf825mt94bTusio900UdSnPSRd');

// API
const app = express();


// App Config

app.use(cors({origin : true }));
app.use(express.json());

// Api routes 


app.get('/', (request , response)=> response.status(200).send('Jai Shree Ram'))


// Middle Wares




//Listen Command


exports.api = functions.https.onRequest(app);

// Example end point
// http://127.0.0.1:5001/e-clone-a567d/us-central1/api




// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
