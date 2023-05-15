import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<WeatherForecastDay data={forecast[0]} />
						<WeatherForecastDay data={forecast[1]} />
						<WeatherForecastDay data={forecast[2]} />
						<WeatherForecastDay data={forecast[3]} />
						<WeatherForecastDay data={forecast[4]} />
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "0b05732c31f31d299fde388ef85a7016";
		let latitude = props.coordinates.lat;
		let longitude = props.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
