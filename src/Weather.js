import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			city: response.data.name,
			date: new Date((response.data.dt + response.data.timezone - 7200) * 1000),
			//located on GMT +2 hence minus 7200 seconds in the calculus
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			temperature: Math.round(response.data.main.temp),
			humidity: Math.round(response.data.main.humidity),
			wind: Math.round(response.data.wind.speed),
		});
	}

	function handleErrorResponse(error) {
		alert(
			`${city} is not listed as a city in our app. Please check the spelling and search for a new city :)`
		);
	}

	function search() {
		const apiKey = "0b05732c31f31d299fde388ef85a7016";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse).catch(handleErrorResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		event.target.reset();
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
				<WeatherForecast />
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
