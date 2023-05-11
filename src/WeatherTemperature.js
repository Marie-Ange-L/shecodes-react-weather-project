import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");
	function showFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}
	function showCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}
	if (unit === "celsius") {
		return (
			<div className="WeatherTemperature">
				<span className="temperature">{props.celsius}</span>
				<span className="unit">
					°C |{" "}
					<a
						className="inactive"
						href="/"
						title="Convert to Fahrenheit"
						onClick={showFahrenheit}
					>
						°F
					</a>
				</span>
			</div>
		);
	} else {
		let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
		return (
			<div className="WeatherTemperature">
				<span className="temperature">{fahrenheit}</span>
				<span className="unit">
					°F |{" "}
					<a
						href="/"
						className="inactive"
						title="Convert to Celsius"
						onClick={showCelsius}
					>
						°C
					</a>
				</span>
			</div>
		);
	}
}
