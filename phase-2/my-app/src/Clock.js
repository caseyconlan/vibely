import React, { useState, useEffect } from "react";

export default function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timerID = setInterval(() => {
			console.log("RUNNING!");
			setTime(new Date());
		}, 1000);

		// returning a cleanup function
		return function cleanup() {
			clearInterval(timerID);
		};
	}, []);

	return <div>{time.toString()}</div>;
}
