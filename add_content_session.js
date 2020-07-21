const admin = require("firebase-admin");
const neatCsv = require('neat-csv');
const fs = require('fs')
const {v4: uuidv4} = require('uuid');

const serviceAccount = require("./private/smartcamp-firebase-adminsdk-fqgoy-0f389e9cd0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smartcamp.firebaseio.com"
});

let db = admin.firestore();


getUsers();



async function getUsers() {

    let _id = 'c825948a-920a-4286-b910-d15c374858e6';

    let data = [
        {
            key: 0,
            destination: 'Streaming',
            time_slot: '10:00 - 10:30',
            name_slot: 'LIVE - RADIO SOCIAL',
            image_slot: 'img/smart_camp/radio.png'
        },
        {
            key: 1,
            destination: 'Streaming',
            time_slot: '10:00 - 10:45',
            name_slot: 'LIVE - RISVEGLIO MUSCOLARE Con GABRIO',
            image_slot: 'img/smart_camp/dance.png'
        },
        {
            key: 2,
            destination: 'Streaming',
            time_slot: '10:45 - 11:00',
            name_slot: 'CHALLENGE',
            image_slot: 'img/smart_camp/radio.png'
        },
        {
            key: 3,
            destination: 'Streaming',
            time_slot: '14:00 - 15:00',
            name_slot: 'GIOCA CON NOI - MIX GAME',
            image_slot: 'img/smart_camp/filoc.png'
        },
        {
            key: 5,
            destination: 'BuonaNotte',
            time_slot: '19:00',
            name_slot: 'Video della Buona Notte - PERCY',
            image_slot: 'img/smart_camp/notte.png'
        }
    ]


    const contents = db.collection('sessions').doc(_id).update({
        sessions: data
    }, {merge: true})


}
