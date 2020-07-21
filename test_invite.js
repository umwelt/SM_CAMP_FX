const admin = require("firebase-admin");
const neatCsv = require('neat-csv');
const fs = require('fs')

const serviceAccount = require("./private/smartcamp-firebase-adminsdk-fqgoy-0f389e9cd0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smartcamp.firebaseio.com"
});

let db = admin.firestore();

let allemails = []

getEmailFromFile()


function getEmailFromFile () {

    db.collection('authorized')
        .where('email', '==', 'fabio.revello@ferrero.com')
        .get().then(snapshot => {

            if (snapshot.size) {
                console.log('exist')
            }

        snapshot.forEach(doc => {
            console.log(doc.data())
        })
    }).catch(error => {
        console.log(error)
    })
}


