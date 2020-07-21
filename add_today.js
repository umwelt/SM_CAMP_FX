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
        order: 3,
        title: 'Velocità al Buio',
        images: [
            'img/games/buio/1.jpg',
            'img/games/buio/2.jpg',
            'img/games/buio/3.jpg',
            'img/games/buio/4.jpg',
        ],
        age: "1",
        duration: "2",
        goal: "Inserire gli oggetti all’interno di un secchio.",
        materials: [
            "benda",
            "oggetto",
            "scopa",
            "secchio"
        ],
        procedure: [
            "Si gioca a coppie. Uno viene bendato e con una scopa deve spazzare un oggetto all’interno di un secchio." +
            " L’altro deve guidare l’operazione. Si può aumentare il livello di difficoltà inserendo degli ostacoli fra la partenza e il secchio di arrivo."
        ]
    }

    return db.collection('today').add(data);


}
