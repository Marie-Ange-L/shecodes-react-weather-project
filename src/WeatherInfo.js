import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1>{props.data.city}</h1>
			<ul>
				<li>
					<FormattedDate date={props.data.date} />
				</li>
				<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row pt-3">
				<div className="col-2">
					<img src={props.data.iconUrl} alt="{props.data.description}" />
				</div>
				<div className="col-5">
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
				<div className="col-5">
					<ul className="data">
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
