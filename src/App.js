import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<h1>Weather App</h1>
			<footer>
				Coded by{" "}
				<a
					href="https://www.linkedin.com/in/marie-ange-lhernould/"
					target="_blank"
					rel="noreferrer"
				>
					Marie-Ange L.
				</a>{" "}
				as part of her training with SheCodes &ndash; available on{" "}
				<a
					href="https://github.com/Marie-Ange-L/shecodes-react-weather-project"
					rel="noreferrer"
				>
					GitHub
				</a>
			</footer>
		</div>
	);
}
