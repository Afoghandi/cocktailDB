import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<section className="error-page sections">
			<div className="error-section">
				<h1> opps!, its a dead end</h1>

				<Link to="/" className="bt btn-primary">
					{" "}
					back home
				</Link>
			</div>{" "}
		</section>
	);
}
