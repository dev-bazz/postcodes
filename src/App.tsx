import "./App.scss";
import { Nav } from "./components";

function App() {
	return (
		<>
			<Nav />
			<section
				aria-label="Hello Do you want to check your Postcode?"
				className="hero">
				<div className="heroWrapper">
					<h1>
						<span>Hello</span>
						<span>Do you want to check your Postcode?</span>
					</h1>
				</div>
			</section>
			<section className="advertArea">
				<div className="search">hhh</div>
			</section>
		</>
	);
}

export default App;
