import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Nav from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/project/:projectId" component={Project} />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
