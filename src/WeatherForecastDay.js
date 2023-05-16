import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();
		let days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
		return days[day];
	}
	return (
		<div className="WeatherForecastDay mt-3">
			<div className="WeatherForecast-day pb-1">{day()}</div>
			<WeatherIcon code={props.data.weather[0].icon} size={32} />
			<div className="WeatherForecast-temp pt-2">
				<div className="WeatherForecast-tempmax">
					{Math.round(props.data.temp.max)}°
				</div>{" "}
				<div className="WeatherForecast-tempmin">
					{Math.round(props.data.temp.min)}°
				</div>
			</div>
		</div>
	);
}
