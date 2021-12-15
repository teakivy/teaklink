import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
initializeApp({
	apiKey: 'AIzaSyDJMrrrL4rsfz32HuUW73HW7_VfL0ykEQE',
	authDomain: 'teaklink-d201d.firebaseapp.com',
	projectId: 'teaklink-d201d',
	storageBucket: 'teaklink-d201d.appspot.com',
	messagingSenderId: '370435527621',
	appId: '1:370435527621:web:e1b6884a5b7f3711a371ac',
	measurementId: 'G-3Y86Y6K0MB',
});

export const db = getFirestore();
