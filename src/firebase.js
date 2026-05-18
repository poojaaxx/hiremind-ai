import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGuG6Ogu9phnPXPPrQGfpjEIsYebYrT88",
  authDomain: "hiremind-ai-37d38.firebaseapp.com",
  projectId: "hiremind-ai-37d38",
  storageBucket: "hiremind-ai-37d38.firebasestorage.app",
  messagingSenderId: "6095090344",
  appId: "1:6095090344:web:ebf7d4c5b6aa0c948ac89d",
  measurementId: "G-8C24CJHQ2S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);