import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './components/Header';
import MarsRoverImages from './components/MarsRoverImages';
import ListReducer, { reducer } from './components/ListReducer'

import './App.css';

const rootReducer = combineReducers(reducer);
const store = createStore(rootReducer);

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
			<br />
			<MarsRoverImages />
			<Provider store={store}>
				<ListReducer/>
			</Provider>
		</div>
	);
}

export default App;
