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

// readEmails()
//
// function readEmails() {
//     db.collection('mail').get().then(snapshot => {
//         snapshot.forEach(doc => {
//             //console.log(doc.id, '=>', doc.data());
//             allemails.push(doc.data().to)
//         })
//
//         console.log(allemails.length)
//     })
//
//
// }



//
//
// let oll = getEmailsFromFile()
//
//
// async function removeDuplicates(locallist, remotelist) {
//
//
//
//     let notsend = locallist
//         .filter(x => !remotelist.includes(x))
//         .concat(remotelist.filter(x => !locallist.includes(x)));
//
//     let final = []
//
//     notsend.forEach(row => {
//         if (isValidEmail(row)) {
//             final.push(row)
//         } else {
//             console.log(row)
//         }
//
//     })
//
//     await asyncForEach(final, async  (row) => {
//         return senInvites(row).then((result) => {
//             console.log(result)
//         }).catch(error => {
//             console.log(error)
//         })
//     });
//
//
//
// }
//
// function isValidEmail( value ) {
//     return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test( value );
// }
//
// async function getEmailsFromFile() {
//
//
//     await db.collection('mail').get().then(snapshot => {
//         snapshot.forEach(doc => {
//             //console.log(doc.id, '=>', doc.data());
//             allemails.push(doc.data().to)
//         });
//
//
//
//     }).then(() => {
//
//         fs.readFile('./private/emas.csv', async (err, data) => {
//
//             if (err) {
//                 console.error(err)
//                 return
//             }
//             let emas = await neatCsv(data)
//             let emails = emas.map( row => { return row.email })
//
//             let uniqueLocal = [...new Set(emails)]
//
//             removeDuplicates(uniqueLocal, allemails)
//
//             //return  await removeDuplicates(emails)
//
//         })
//
//
//     })
//
//
//
// }
//
//
//
//
//
//



sendInvites('andrea.schiavuzzi@ferrero.com')

async function sendInvites(email) {
    return db.collection('mail').add(emailData(email))
}

//
//
async  function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}
//
function emailData(user_email) {
    return {
        to: user_email,
        template: {
            name: 'welcome',
            data: {
                email: user_email,
                company: 'FERRERO'
            }
        }
    }
}
//
// // db.collection('users').get().then((snapshot) => {
// //     snapshot.forEach((doc) => {
// //         console.log(doc.id, '=>', doc.data());
// //     });
// //
// // }).catch((error) => {
// //     console.log(error)
// // })
