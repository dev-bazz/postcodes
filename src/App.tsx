import { useForm } from "react-hook-form";
import "./App.scss";
import { Nav } from "./components";

import advert1 from "./assets/advert-1.png";
import advert2 from "./assets/advert-2.png";
import advert3 from "./assets/advert-3.png";

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
									{...register("radio", {
										value: "Locate Me",
									})}
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
								<div className="drop">
									<DropIcon />
								</div>
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
							<GuestIcon />
							<span>Guest</span>
						</div>
					</div>
					<div className="bottom">
						<div className="images">
							<div className="image">
								<img
									src={advert1}
									alt=""
								/>
								<p>Double from</p>
							</div>
							<div className="image">
								<img
									src={advert2}
									alt=""
								/>
								<p>Double from</p>
							</div>
							<div className="image">
								<img
									src={advert3}
									alt=""
								/>
								<p>Double from</p>
							</div>
						</div>
						<div className="countries">
							<ul>
								<li>1</li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
								<li>5</li>
								<li>6</li>
								<li>7</li>
								<li>8</li>
							</ul>
							<button className="btn">Submit</button>
						</div>
					</div>
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

function GuestIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="12"
			fill="none"
			viewBox="0 0 25 12">
			<path
				fill="#C9960C"
				d="M4.5 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1C5.26 8.04 4.89 8 4.5 8c-.99 0-1.93.21-2.78.58A2.01 2.01 0 00.5 10.43V12H5v-1.61c0-.83.23-1.61.63-2.29zM20.5 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020.5 8c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V12h4.5v-1.57zm-7.76-2.78c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9a2.988 2.988 0 00-1.76 2.74V12h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM8.57 10c.09-.23.13-.39.91-.69a8.25 8.25 0 013.02-.56c1.03 0 2.05.18 3.02.56.77.3.81.46.91.69H8.57zm3.93-8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
		</svg>
	);
}

function DropIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="12"
			fill="none"
			viewBox="0 0 20 12">
			<path
				fill="#989391"
				d="M1.77.115L0 1.885l10 10 10-10-1.77-1.77L10 8.345 1.77.115z"></path>
		</svg>
	);
}
