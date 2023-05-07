import React from "react";
import "./Weather.css";

export default function Weather() {
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
