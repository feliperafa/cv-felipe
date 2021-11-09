import React from 'react';
import GlobalStyle from './style/global';
import { MainRoutes } from './routes/routes';
import { Header } from './components/header';
function App() {
	return (
		<div className="App">
			<Header />
			<MainRoutes />
			<GlobalStyle />
		</div>
	);
}

export default App;
