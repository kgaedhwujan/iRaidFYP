var admin = require('firebase-admin');

var serviceAccount = require('./firebaseadmin.json');

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});

const uid = 'some-uid';
const additionalClaims = {
    Driver:true
};


admin.auth().createCustomToken(uid,additionalClaims)
.then((customToken) => {
    console.log(customToken);
})
.catch((error) => {
    console.log('Error creating custom token : ', error)
});