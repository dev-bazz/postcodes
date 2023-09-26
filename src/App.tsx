import { useForm } from "react-hook-form";
import "./App.scss";
import { Nav } from "./components";

function App() {
	const { register, handleSubmit } = useForm();

	const test = import.meta.env.VITE_TEST;
	console.log(test);
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
				<div className="advertForm">
					<form
						onSubmit={handleSubmit((data) => console.log(data))}
						className="search">
						<div className="radios">
							<div className="radio">
								<input
									value={"Check My Postcode"}
									id="radio1"
									type="radio"
									{...register("radio", {
										value: "Check My Postcode",
									})}
								/>
								<label htmlFor="radio1">Check My Postcode</label>
							</div>
							<div className="radio">
								<input
									id="radio2"
									type="radio"
									value={"locate Me"}
									{...register("radio")}
								/>
								<label htmlFor="radio2">Locate Me</label>
							</div>
						</div>
						<div className="query">
							<div className="searchContainer">
								<span className="icon">
									<SearchIcon />
								</span>
								<input
									placeholder="Address, Country, City or Postcode..."
									type="text"
								/>
								<button className="btnSearch">Search</button>
							</div>
							<div className="selectContainer">
								<select
									className="select"
									{...register("selected", {
										value: "select",
									})}
									placeholder="Select">
									<option
										value="select"
										disabled>
										Select/Province
									</option>
									<option value="lagos">lagos</option>
									<option value="abuja">abuja</option>
									<option value="benin">benin</option>
									<option value="kano">kano</option>
								</select>
							</div>
						</div>
					</form>
				</div>
				<div className="advert">
					<div className="advertTop">
						<div className="advertInputs">
							<input
								type="text"
								placeholder="e.g. city, region, district..."
							/>
							<input
								type="month"
								value={"2023-01"}
							/>
							<button className="btn">Submit</button>
						</div>
						<div className="guest">
							<span>Guest</span>
						</div>
					</div>
					<div className=""></div>
				</div>
			</section>
		</>
	);
}

export default App;

function SearchIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="26"
			fill="none"
			viewBox="0 0 25 26">
			<g>
				<path
					fill="#989391"
					fillRule="evenodd"
					d="M16.548 10.303c0 3.765-3.04 6.802-6.774 6.802C6.041 17.105 3 14.068 3 10.303 3 6.537 6.041 3.5 9.774 3.5s6.774 3.037 6.774 6.803zm-1.534 8.276a9.708 9.708 0 01-5.24 1.526C4.376 20.105 0 15.716 0 10.303 0 4.889 4.376.5 9.774.5c5.398 0 9.774 4.389 9.774 9.803a9.78 9.78 0 01-2.278 6.29l6.214 6.258-2.114 2.129-6.356-6.401z"
					clipRule="evenodd"></path>
			</g>
		</svg>
	);
}
