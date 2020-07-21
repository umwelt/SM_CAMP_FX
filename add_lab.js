const admin = require("firebase-admin");
const neatCsv = require('neat-csv');
const fs = require('fs')

const serviceAccount = require("./private/smartcamp-firebase-adminsdk-fqgoy-0f389e9cd0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smartcamp.firebaseio.com"
});

let db = admin.firestore();


setLab();



async function setLab() {

    let data = {
        order: 5,
        title: 'ARCO E FRECCE',
        main_image: "https://firebasestorage.googleapis.com/v0/b/smartcamp.appspot.com/o/labs%2Farco%2Fmain.jpg?alt=media&token=56f6aefb-d3b1-4919-be82-147df2257414",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/smartcamp.appspot.com/o/labs%2Farco%2Ffig1.jpg?alt=media&token=989809a3-5236-4885-9b2f-1023b5cdd29f",
            "https://firebasestorage.googleapis.com/v0/b/smartcamp.appspot.com/o/labs%2Farco%2Ffig2.jpg?alt=media&token=af033b42-6842-42e7-be34-d9d47f05c436",
            "https://firebasestorage.googleapis.com/v0/b/smartcamp.appspot.com/o/labs%2Farco%2Ffig3.jpg?alt=media&token=875d92e3-53de-43a0-9eb1-1fdf3f726c86",
            "https://firebasestorage.googleapis.com/v0/b/smartcamp.appspot.com/o/labs%2Farco%2Ffig4.jpg?alt=media&token=453819ac-695f-46ed-bf15-730bdb388187"
        ],
        age: "11 ANNI IN SU",
        duration: "40 min",
        goal: "Esercitare la manualità, imparare a creare con poco e sviluppare un legame con la natura",
        materials: [
            'Ramo di noce alto quanto te',
            'Coltello'
        ],
        procedure: [
            "Cerca un ramo dritto e morbido (tipo quello di noce) lungo quanto la tua altezza.",
            "Chiedi ad un adulto di togliere la corteccia dal ramo utilizzando un coltello. Se non c’è nessuno che può aiutarti, invece del coltello utilizza un altro legnetto e strofinalo sul ramo in modo da allisciare il più possibile la superficie (fig. 1)",
            "Ricorda di assottigliare l’estremità del ramo rivolta verso di te (fig. 2).",
            "Incidi due tacche all’estremità del ramo (fig. 3). ",
            "Lega una corda a una estremità poi falla passare nella tacca. Prima di attaccare la corda dall’altra parte, piega leggermente l’arco per dargli una ferma leggermente arrotondata (fig. 4).",
            "Per costruire le frecce cerca dei rami belli dritti e arrotonda la punta con un coltello, così eviterai di fare male a qualcuno.",
            "Divertiti a giocare all’aperto e stai attento a non puntare mai la freccia verso altre persone o animali."
        ]
    }

    return db.collection('labs').add(data);


}
