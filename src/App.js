import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
//import './App.css';

class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App">
					<div className="container">
						<Header />
						<Contacts />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
