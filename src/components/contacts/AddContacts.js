import React, { Component } from 'react';
import { Consumer } from '../../Context';
import uuid from 'uuid';

class AddContacts extends Component {
	state = {
		id: uuid(),
		name: '',
		email: '',
		phone: ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		const newContact = {
			name,
			email,
			phone
		};

		dispatch({ type: 'ADD_CONTACT', payload: newContact });

		this.setState({
			name: '',
			email: '',
			phone: ''
		});
	};

	render() {
		const { name, email, phone } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;

					return (
						<div className="card mb-3">
							<div className="card-header">Add contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input
											type="text"
											name="name"
											className="form-control form-control-lg"
											placeholder="Name..."
											required
											value={name}
											onChange={this.onChange}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input
											type="text"
											name="email"
											className="form-control form-control-lg"
											placeholder="Email"
											required
											value={email}
											onChange={this.onChange}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="phone">Phone</label>
										<input
											type="text"
											name="phone"
											className="form-control form-control-lg"
											placeholder="Phone"
											required
											value={phone}
											onChange={this.onChange}
										/>
									</div>
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
