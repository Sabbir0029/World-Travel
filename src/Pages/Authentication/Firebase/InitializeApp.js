import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const InitializeApp = () =>{
    initializeApp(firebaseConfig)
}

export default InitializeApp;