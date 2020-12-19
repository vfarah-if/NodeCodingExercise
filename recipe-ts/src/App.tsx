import React from 'react';
import './App.css';
import Header from './components/Header';
import MarsRoverImages from './components/MarsRoverImages';

function App() {
	let user = undefined;
	const loginHandler = () => alert('OnLogin ...');
	const createAccountHandler = () => alert('createAccountHandler ...');

	return (
		<div className="App">

				<Header		
					user={user}
					onLogin={loginHandler}
					onCreateAccount={createAccountHandler}
				/>
				<br/>
				<MarsRoverImages/>
		</div>
	);
}

export default App;
