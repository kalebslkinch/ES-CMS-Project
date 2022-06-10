import { getDatabase } from '@firebase/database';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, deleteObject } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}

export const app = firebaseApp;
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();

// Auth

export const signout = () => {
  return signOut(auth);
};

// Storage

export const upload = async (file, fileName, setFileName, setLoading) => {
  const fileRef = ref(storage, `/es-cms/images/${fileName}`);

  setLoading(true);
  const snapshot = await uploadBytes(fileRef, file);
  setLoading(false);
  setFileName('');
};

export const deleteFile = async (fileName) => {
  const fileRef = ref(storage, `es-cms/images/${fileName}`);

  // Delete the file
  deleteObject(fileRef)
    .then(() => {
      // File deleted successfully
    })
    .catch((error) => {
      console.log(error);
    });
};
