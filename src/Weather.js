import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			city: response.data.name,
			date: new Date((response.data.dt + response.data.timezone) * 1000),
			description: response.data.weather[0].description,
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
			temperature: Math.round(response.data.main.temp),
			humidity: Math.round(response.data.main.humidity),
			wind: Math.round(response.data.wind.speed),
		});
	}

	function search() {
		const apiKey = "0b05732c31f31d299fde388ef85a7016";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
								onChange={handleChange}
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
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return (
			<div className="Weather">
				<p>Loading...</p>
			</div>
		);
	}
}
