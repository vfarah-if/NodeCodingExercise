import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Hello from './components/Hello';
import UserDetails from './components/UserDetails';
import MarsRoverImages from './components/MarsRoverImages';

function App() {
	let user = undefined;
	const loginHandler = () => alert('OnLogin ...');
	const createAccountHandler = () => alert('createAccountHandler ...');
	const userId = 1;

	return (
		<div className="App">
			<Header
				user={user}
				onLogin={loginHandler}
				onCreateAccount={createAccountHandler}
			></Header>
			<header className="App-header">
				<MarsRoverImages />
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
			</header>
		</div>
	);
}

export default App;
