import GlobalStyle from './style/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './routes/routes';
import { Header } from './components/header';
function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<MainRoutes />
			</Router>
			<GlobalStyle />
		</div>
	);
}

export default App;
