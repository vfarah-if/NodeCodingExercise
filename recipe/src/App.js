import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Hello from './components/Hello';
import UserDetails from './components/User';
import Map from './components/Map';

function App() {
	let user = undefined;
	const loginHandler = () => alert('OnLogin ...');
	const logoutHandler = () => alert('onLogout ...');
	const createAccountHandler = () => alert('createAccountHandler ...');
	const userId = 1;
	const mapPosition = '6 Lake Gardens, TW10';

	return (
		<div className="App">
			<Header
				user={user}
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			></Header>
			<header className="App-header">
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
				<Hello></Hello>
				<UserDetails id={userId}></UserDetails>
				<Map center={mapPosition}></Map>
			</header>
		</div>
	);
}

export default App;
