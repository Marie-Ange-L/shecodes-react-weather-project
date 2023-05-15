import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}

	const apiKey = "0b05732c31f31d299fde388ef85a7016";
	let latitude = props.coordinates.lat;
	let longitude = props.coordinates.lon;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Mon</div>
					<WeatherIcon code="04d" size={32} />
					<div className="WeatherForecast-temp">
						<span className="WeatherForecast-tempmax">19°</span>{" "}
						<span className="WeatherForecast-tempmin">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
