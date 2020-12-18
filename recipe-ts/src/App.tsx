import React from 'react';
import './App.css';
import Header from './components/Header';

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
		</div>
	);
}

export default App;
