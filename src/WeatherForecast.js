import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
