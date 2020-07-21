const admin = require("firebase-admin");
const neatCsv = require('neat-csv');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const serviceAccount = require("./private/smartcamp-firebase-adminsdk-fqgoy-0f389e9cd0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smartcamp.firebaseio.com"
});

let db = admin.firestore();


getUsers();



async function getUsers() {

    let _id = uuidv4();

    let data = {
        order: 11,
        session_id: _id,
        main_image: 'img/sessions/day_twelve.png',
        sessions: []
    }

    return db.collection('sessions').doc(_id).set(data);


}
