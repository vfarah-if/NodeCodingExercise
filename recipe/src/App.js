import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					Button Component to help understand setting up storyboarding
					from scratch
				</p>
				<Button
					backgroundColor="blue"
					size="large"
					displayName="Big Button"
					primary={true}
				></Button>
			</header>
		</div>
	);
}

export default App;
