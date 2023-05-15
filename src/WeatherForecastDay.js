import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	function day() {
		let date = new Date(props.data.date * 1000);
		let day = date.getDay();
		let days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
		return days[day];
	}
	return (
		<div className="WeatherForecastDay">
			<div className="WeatherForecast-day">{day()}</div>
			<WeatherIcon code={props.data.weather[0].icon} size={32} />
			<div className="WeatherForecast-temp">
				<span className="WeatherForecast-tempmax">
					{Math.round(props.data.temp.max)}°
				</span>{" "}
				<span className="WeatherForecast-tempmin">
					{Math.round(props.data.temp.min)}°
				</span>
			</div>
		</div>
	);
}
