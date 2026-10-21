// Firebase web config is inherently public (it ships to every browser that loads the app) — Google's
// own docs say not to treat it as a secret. Real protection comes from Firestore security rules plus
// restricting this API key's "HTTP referrers" to anna-rafaella.github.io in Google Cloud Console →
// APIs & Services → Credentials.
//
// TODO: paste the config of your own Firebase project here (Firebase console → Project settings →
// Your apps → Web app). While projectId is empty, the visitor counter stays off and is hidden.
export const firebaseConfig = {
  apiKey: "AIzaSyCw6mU5Ni-IZ9Psm8an3prNJrXC2V3u7Ok",
  authDomain: "portfolio-project-db06a.firebaseapp.com",
  projectId: "portfolio-project-db06a",
  storageBucket: "portfolio-project-db06a.firebasestorage.app",
  messagingSenderId: "452626336865",
  appId: "1:452626336865:web:8af03f105d37c47d632e20",
  measurementId: "G-0TV342G6WT"
};
