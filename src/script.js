// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getDatabase, ref, child, get } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0b4rBi3xmO21EtCnYxMara8uhPIYdcz4",
  authDomain: "fire-learning-553bb.firebaseapp.com",
  projectId: "fire-learning-553bb",
  storageBucket: "fire-learning-553bb.appspot.com",
  messagingSenderId: "908553761580",
  appId: "1:908553761580:web:82c7a0cd82d0e0b27c7289",
  measurementId: "G-L3Q3PYHQS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// let obj = {
//   "items": [
//       "Accessory designer",
//       "Advertising designer",
//       "Animator",
//       "Architect",
//       "Art administrator",
//       "Artisan",
//       "Arts administration",
//       "Art therapist",
//       "Baker",
//       "Ceramics artist",
//       "Chief creative officer",
//       "Colorist",
//       "Comedian",
//       "Concept Artist",
//       "Curator",
//       "Dancer",
//       "Design director",
//       "Design strategist",
//       "Essayist",
//       "Event planner",
//       "Fashion designer",
//       "Fine artist",
//       "Floral designer",
//       "Graphic designer",
//       "Hairstylist",
//       "Illustrator",
//       "Tattoo artist",
//       "Interior designer",
//       "Jewellery designer",
//       "Lyricist",
//       "Make-up artist",
//       "Marine designer",
//       "Media designer",
//       "Musician",
//       "Party planner",
//       "Penciller",
//       "Photographer",
//       "Photojournalist",
//       "Potter",
//       "Production designer",
//       "Sculptor",
//       "Set decorator",
//       "Set dresser",
//       "Singer",
//       "Web designer",
//       "Wedding planner",
//       "Writer"
//   ]
// }
//     firebase.database().ref('arts/artistic').set(obj)

