import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/project/:projectId" component={Project} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
