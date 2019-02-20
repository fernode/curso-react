import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter((contact) => contact.id !== action.payload)
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'Fernando Silva',
				email: 'fernandosilvadj@hotmail.com',
				phone: '444-444-44'
			},
			{
				id: 2,
				name: 'Maria Silva',
				email: 'maria@hotmail.com',
				phone: '333-222-55'
			},
			{
				id: 3,
				name: 'João Damasceno',
				email: 'joaodamas@hotmail.com',
				phone: '323-444-433'
			}
		],
		dispatch: (action) => this.setState((state) => reducer(state, action))
	};

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
