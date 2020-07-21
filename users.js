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

    db.collection('users').get()
        .then((result) => {
       return result.forEach(doc => {
           if (doc.data().displayName === 'Mattia& Dario') {
               console.log(doc.data())
           }
           // console.log(doc.data().displayName + ' _ ' + doc.data().email )
       })
    }).catch((error) => {
        console.log(error)
    })

}
