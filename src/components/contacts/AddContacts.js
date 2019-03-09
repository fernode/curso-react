import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';

import uuid from 'uuid';

class AddContacts extends Component {
	state = {
		id: uuid(),
		name: '',
		email: '',
		phone: '',
		errors: {}
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();

		const { id, name, email, phone } = this.state;

		if (name === '') {
			this.setState({ errors: { name: 'Name is required' } });
			return;
		}

		if (email === '') {
			this.setState({ errors: { email: 'Email is required' } });
			return;
		}

		if (phone === '') {
			this.setState({ errors: { phone: 'Phone is required' } });
			return;
		}

		const newContact = {
			id,
			name,
			email,
			phone
		};

		dispatch({ type: 'ADD_CONTACT', payload: newContact });

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		});
	};

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;

					return (
						<div className="card mb-3">
							<div className="card-header">Add contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup
										type="text"
										name="name"
										label="Name"
										placeholder="Name..."
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup
										type="text"
										name="email"
										label="Email"
										placeholder="Email"
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup
										type="text"
										name="phone"
										label="Phone"
										placeholder="Phone"
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input type="submit" value="Add contact" className="btn btn-light btn-block" />
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddContacts;
