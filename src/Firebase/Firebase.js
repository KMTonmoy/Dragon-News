
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyApFak9Z_0csNTx2lFD8u9CqKaoCEElGoc",
    authDomain: "dragon-news-layout-1-auth.firebaseapp.com",
    projectId: "dragon-news-layout-1-auth",
    storageBucket: "dragon-news-layout-1-auth.appspot.com",
    messagingSenderId: "249242134114",
    appId: "1:249242134114:web:30830d54421123c618533b"
};


const app = initializeApp(firebaseConfig);
export default app