import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';

function App() {
	let user = undefined;
	const loginHandler = () => alert('OnLogin ...');
	const logoutHandler = () => alert('onLogout ...');
	const createAccountHandler = () => alert('createAccountHandler ...');

	return (
		<div className="App">
			<Header
				user={user}
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			></Header>
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
					backgroundColor="green"
					size="medium"
					displayName="Big Button"
					primary={true}
					onClick={() => alert('Hello from big button')}
					disabled={false}
				></Button>
			</header>
		</div>
	);
}

export default App;
