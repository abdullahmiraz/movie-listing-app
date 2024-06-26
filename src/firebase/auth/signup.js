import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase_app from "../firebase.config";

const auth = getAuth(firebase_app);
// console.log(auth);

export default async function signUp(email, password) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
