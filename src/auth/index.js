import { makeSignUp, makeSignIn } from './auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../firebase';

const signUp = makeSignUp(createUserWithEmailAndPassword);
const signIn = makeSignIn(signInWithEmailAndPassword);

export { signUp, signIn };
