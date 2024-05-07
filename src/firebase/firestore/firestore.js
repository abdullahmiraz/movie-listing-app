import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import firebase_app from "../firebase.config";

const db = getFirestore(firebase_app);

export async function addData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
export async function removeData(collection, id) {
  let result = null;
  let error = null;

  try {
    await deleteDoc(doc(db, collection, id));
    result = true; // Indicate success
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getDocument(collection, id) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export default db;
