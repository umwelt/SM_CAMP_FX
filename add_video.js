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

    let data = {
        order: 210,
        main: true,
        video_url: 'https://player.vimeo.com/video/436779451',
        created: new Date()
    }

     return db.collection('night').add(data);


}
