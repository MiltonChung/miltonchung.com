import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/projects" component={ProjectsPage} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
