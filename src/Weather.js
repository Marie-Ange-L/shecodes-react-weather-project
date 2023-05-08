import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
	function handleResponse(response) {
		console.log(response.data);
	}

	const apiKey = "0b05732c31f31d299fde388ef85a7016";
	let city = "Toulouse";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);
	return (
		<div className="Weather">
			<form>
				<div className="row">
					<div className="col-9">
						<input
							type="search"
							placeholder="Enter a city..."
							className="form-control"
							autoFocus="on"
						/>
					</div>
					<div className="col-3">
						<input
							type="submit"
							value="Search"
							className="btn btn-light w-100"
						/>
					</div>
				</div>
			</form>
			<h1>Toulouse</h1>
			<ul>
				<li>Sunday 12:00</li>
				<li>Mostly Cloudy</li>
			</ul>
			<div className="row pt-3">
				<div className="col-6">
					<img
						src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
						alt=""
					/>
					<span className="temperature">18</span>
					<span className="unit">°C</span>
				</div>
				<div className="col-6">
					<ul className="data">
						<li>Precipitation: 22%</li>
						<li>Humidity: 79%</li>
						<li>Wind: 13 km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
