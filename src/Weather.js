import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data.coord);
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			date: new Date((response.data.dt + response.data.timezone - 7200) * 1000),
			//located on GMT +2 hence minus 7200 seconds in the calculus
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			temperature: Math.round(response.data.main.temp),
			humidity: Math.round(response.data.main.humidity),
			wind: Math.round(response.data.wind.speed),
			city: response.data.name,
		});
	}

	function handleErrorResponse(error) {
		alert(
			`${city} is not listed as a city in our app. Please check the spelling and search for a new city :)`
		);
	}

	function handleSubmit(event) {
		event.preventDefault();
		event.target.reset();
		search();
	}

	function handleChange(event) {
		setCity(event.target.value);
	}

	function search() {
		const apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse).catch(handleErrorResponse);
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
				<WeatherForecast coordinates={weatherData.coordinates} />
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
