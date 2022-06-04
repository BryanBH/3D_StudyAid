import ReactDOM from "react-dom/client";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="mainPage" element={<MainPage />} />
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
