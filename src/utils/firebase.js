import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getDoc,setDoc,doc,getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpnQGMW483kQ1qzug6LoRikmRrJyD2oiU",
  authDomain: "crown-project-db-3bb85.firebaseapp.com",
  projectId: "crown-project-db-3bb85",
  storageBucket: "crown-project-db-3bb85.appspot.com",
  messagingSenderId: "1019422370173",
  appId: "1:1019422370173:web:c77029cf625717ba328414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
});



export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);



const db = getFirestore()
export const createUserDocumentsFromAuth = async(user,extras) => {
  const userDocRef = doc(db,"users",user.uid)
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
    const {displayName, email } = user
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...extras
      });
    } catch (error) {
      console.log('there was error creating the user'  + error.message)
    }
  }

  return userDocRef;

}