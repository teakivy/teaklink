import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function GoToLink() {
	const { code } = useParams();
	const history = useNavigate();
	const [url, setUrl] = useState("");

	useEffect(async () => {
		const q = query(collection(db, "urls"), where("code", "==", code));

		const querySnapshot = await getDocs(q);
		if (querySnapshot.empty) {
			window.location.href = "https://localhost:3000";
		} else {
			const url = querySnapshot.docs[0].data().url;
			setUrl(url);
			window.location.replace(url);
		}
	});

	return <div>URL:{url}</div>;
}

export default GoToLink;
