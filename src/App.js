import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import GoToLink from "./GoToLink";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/home' element={<Home />} />
					<Route exact path='/l/:code' element={<GoToLink />} />
					<Route exact path='/:code' element={<GoToLink />} />
					<Route element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
