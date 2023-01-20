import React from "react";
import ReactDOM from "react-dom/client";

const navbar = (
	<nav>
		<h1>My Website</h1>
		<ul>
			<li>Pricing</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);

ReactDOM.createRoot(document.getElementById("root").render(navbar));
