import { initializeApp } from 'firebase/app';
import { getStorage, ref as storeRef, getDownloadURL, listAll } from 'firebase/storage';
import { getDatabase, ref as dbRef, get } from 'firebase/database';

let firebaseApp = null;
let firebaseStorage = null;
let firebaseDatabase = null;

export const firebaseConfig = {

	apiKey: "AIzaSyAXm0O9pK1Pj2JxCjd-Zlwmn1PQTNlxB6I", //IT'S FINE I SWEAR THE CLIENT NEEDS IT

	authDomain: "unthynck-band.firebaseapp.com",

	databaseURL: "https://unthynck-band-default-rtdb.firebaseio.com",

	projectId: "unthynck-band",

	storageBucket: "unthynck-band.appspot.com",

	messagingSenderId: "909124920050",

	appId: "1:909124920050:web:b74ddb694a57702dfca66b",

	measurementId: "G-99L1JC49Z1"

}

export function initApp() {
	firebaseApp = initializeApp(firebaseConfig);

	return firebaseApp;
}

export function initStorage() {
	firebaseStorage = getStorage(firebaseApp);

	if (firebaseStorage === null) {
		console.log("App appears to not have been initialized! Attempting...");
		initApp();
		return initStorage();
	}

	return firebaseStorage;
}

export function initDatabase() {
	firebaseDatabase = getDatabase(firebaseApp);

	if (firebaseDatabase === null) {
		console.log("App appears to not have been initialized! Attempting...");
		initApp();
		return initDatabase();
	}

	return firebaseDatabase;
}



export async function getFileFromStorage(path, fileName) {
	if (firebaseStorage === null) {
		console.log("Storage appears to not have been initialized! Attempting...");
		initStorage();
	}

	const storageRef = storeRef(firebaseStorage, path);

	console.log(await listAll(storageRef));

	const listRes = await listAll(storageRef).catch((err) => {
		console.error("Could not access the referenced bucket: ", err);
		return null;
	});

	if (listRes === null) {
		return "";
	}

	const fileRef = listRes.items.find(item => item.name === fileName);

	if (!fileRef) {
		console.error("Could not find the file from storage: ", fileName);
		return "";
	} else {
		return getDownloadURL(fileRef);
	}
}



export async function getDownloadsFromStorage(path) {
	if (firebaseStorage === null) {
		console.log("Storage appears to not have been initialized! Attempting...");
		initStorage(); //ignore return
	}

	const storageRef = storeRef(firebaseStorage, path);

	const listResult = await listAll(storageRef).catch((err) => {
		console.error("Error fetching storage list: ", err);
		return null;
	});

	if (!listResult) {
		return []; //blank to indicate no downloads
	}

	const urlPromises = listResult.items.map((itemRef) => {
		return getDownloadURL(itemRef).catch((err) => {
			console.error("Error fetching download URL for item(s): ", err);
			return null;
		});
	});

	//Resolve all promises and return filter of no nulls
	const urls = await Promise.all(urlPromises);
	return urls.filter((url) => url !== null);
}



export async function getDataFromDatabase(path) {
	if (firebaseDatabase === null) {
		console.log("Database appears to not have been initialized! Attempting...");
		initDatabase(); //ignore return
	}

	const dataRef = dbRef(firebaseDatabase, path);

	try {
		const snapshot = await get(dataRef);

		if (snapshot.exists()) {
			return snapshot.val(); // This returns the actual data
		} else {
			return []; // Return empty array if no data
		}
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
}