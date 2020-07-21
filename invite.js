const admin = require("firebase-admin");
const neatCsv = require('neat-csv');
const fs = require('fs')

const serviceAccount = require("./private/smartcamp-firebase-adminsdk-fqgoy-0f389e9cd0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smartcamp.firebaseio.com"
});

let db = admin.firestore();


getUsers();


async function getUsers() {

    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();

    let emails = []

    snapshot.forEach(doc => {

        emails.push(doc.data().email)

    });

    console.log(emails);



}
