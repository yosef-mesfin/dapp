import React from "react";

import { Stack } from "@mui/material";

import NavBar from "./components/nav-bar";
import Trade from "./pages/Trade";
import Footer from "./components/Footer";

function App() {
	return (
		<Stack height="100vh" width="100vw" paddingX="20px">
			<header className="App-header">
				<NavBar />
			</header>
			<Trade />
			<Footer />
		</Stack>
	);
}

export default App;
