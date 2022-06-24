import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewPlaylist from "./pages/NewPlaylist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "./hooks/useAuth";
const code = new URLSearchParams(window.location.search).get("code");
function App() {
	
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={code ? <MainPage code={code} /> : <Landing />}
					/>
					<Route path="about" element={<About />} />
					<Route path="contactUs" element={<Contact />} />
					<Route
						path="newPLaylist"
						element={<NewPlaylist />}
					/>
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>Page not found</p>
							</main>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
