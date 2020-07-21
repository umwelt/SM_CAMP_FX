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
        order: 6,
        title: 'FRATELLI',
        main_image: "https://firebasestorage.googleapis.com/v0/b/smartcamp.appspot.com/o/games%2Ffratelli%2FFratelli-1.jpg?alt=media&token=c731021d-6c6e-420b-8a10-fc6a4d9e8f52",
        images: [
            'https://firebasestorage.googleapis.com/v0/b/smartcamp.appspot.com/o/games%2Ffratelli%2FFratelli-1.jpg?alt=media&token=c731021d-6c6e-420b-8a10-fc6a4d9e8f52',
            'https://firebasestorage.googleapis.com/v0/b/smartcamp.appspot.com/o/games%2Ffratelli%2FFratelli-2-.jpg?alt=media&token=4a12314a-740d-4abb-b24e-4acb36bb1861',
        ],
        age: "6-12",
        duration: "15 min ca. in più manche",
        goal: "",
        materials: [
            'musica'
        ],
        procedure: [
            "Prima di iniziare si formano delle coppie. ",
            "Al via della musica i ragazzi devono ballare singolarmente.",
            "Quando la musica si ferma devono ritrovare il loro “fratello (compagno di coppia) e sedersi per terra schiena contro schiena con le braccia legate. L’ultima coppia che si siede viene eliminata. ",
            "Si possono aumentare i livelli di difficoltà modificando la posizione da assumere allo stop della musica: uno in braccio all’altro, abbracciati, dita nelle orecchie ecc…"
        ]
    }

    return db.collection('games').add(data);


}
