import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.cookie = "sameSite=None; Secure";
	}, []);

	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/projects" component={ProjectsPage} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
