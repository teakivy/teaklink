import React, { useState } from "react";
import "./Home.css";

import { db } from "../../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

function Home() {
	const [url, setUrl] = useState("");
	const [code, setCode] = useState("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const q = query(collection(db, "urls"), where("code", "==", code));

		if (!url.includes("http")) {
			alert("Error: Invalid URL");
			return;
		}

		const querySnapshot = await getDocs(q);
		if (querySnapshot.empty) {
			await addDoc(collection(db, "urls"), {
				url: url,
				code: code,
			});
			alert(`Link to ${url} has been added. https://teaklink.tk/l/${code}`);
			setUrl("");
			setCode("");
		} else {
			alert(`A link with this code already exists.`);
			setCode("");
		}
	};

	return (
		<div className='Home'>
			<form onSubmit={handleFormSubmit} className='Form'>
				<input
					type='text'
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder='Enter the URL here...'
					className='urlInput'
				/>
				<br></br>
				<p>teaklink.tk/</p>
				<input
					type='text'
					value={code}
					onChange={(e) => setCode(e.target.value)}
					placeholder='Enter the Shorten Code here...'
					className='codeInput'
				/>
				<input type='submit' value='Shorten' className='submit' />
			</form>
		</div>
	);
}

export default Home;
