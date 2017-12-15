import * as firebase from 'firebase';

const config = {
    apiKey:             process.env.FIREBASE_API_KEY,
    authDomain:         process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:        process.env.FIREBASE_DATABASE_URL,
    projectId:          process.env.FIREBASE_PROJECT_ID,
    storageBucket:      process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// const expenses = database.ref('expenses');
// expenses
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];
//         snapshot.forEach(s => {
//             expenses.push({
//                 id: s.key,
//                 ...s.val()
//             })
//         })
//         console.log('------------------------------------------');
//         console.log('expenses ',expenses);
//         console.log('------------------------------------------');
//     })

// expenses
//     .push({
//         description: 'rock',
//         note: '',
//         amount: 8,
//         createdAt: 346433
//     })
//
// expenses
//     .push({
//         description: 'snow',
//         note: '',
//         amount: 987,
//         createdAt: 1346433
//     })
//
// expenses
//     .push({
//         description: 'wind',
//         note: 'asdfasdfasdf',
//         amount: 58,
//         createdAt: 433
//     })