import React from "react";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather />
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
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</footer>
			</div>
		</div>
	);
}
