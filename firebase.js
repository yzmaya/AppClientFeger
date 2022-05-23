
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyDim04dy07kZmjK5DeHP6siKSW-Ru2nN58",
  authDomain: "todolist-a936f.firebaseapp.com",
  projectId: "todolist-a936f",
  storageBucket: "todolist-a936f.appspot.com",
  messagingSenderId: "275378853802",
  appId: "1:275378853802:web:ec860c370e167b471afdd3"
};
var userID = localStorage.getItem("UserID");
console.log(userID)


var luis = "GsIAhi9LeIVctMWBlhYSzKbCRef1"
var vero = "0CQXGjrqrdNIEBDpcUZzMTg5ARZ2"
var areli = "DxotYIXpNlaYMpd1G2owqR76iy32"
var asesorventas = "ZCZa6bwW8uQNjkdLyNPBqpNjyp13"
var ivonnem = "CBNvrE3hCpNxquJSN4WOyDQj23D2"
var baruch = "uAG41FLLXJaw2iUnIRyoOUCc8WF3"
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, userID), { title, description });

  export const onGetTasks = (callback) =>
  onSnapshot(collection(db, userID), callback);

export const onGetTasks2 = (callback) =>
  onSnapshot(collection(db, luis), callback);

  export const onGetTasks3 = (callback) =>
  onSnapshot(collection(db, vero), callback);

  export const onGetTasks4 = (callback) =>
  onSnapshot(collection(db, areli), callback);

  export const onGetTasks5 = (callback) =>
  onSnapshot(collection(db, asesorventas), callback);

  export const onGetTasks6 = (callback) =>
  onSnapshot(collection(db, ivonnem), callback);

  export const onGetTasks7 = (callback) =>
  onSnapshot(collection(db, baruch), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, userID, id));

export const getTask = (id) => getDoc(doc(db, userID, id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, userID, id), newFields);

export const getTasks = () => getDocs(collection(db, userID));
