import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	onDeleteClick = (id, dispatch) => {
		dispatch({ type: 'DELETE_CONTACT', payload: id });
	};

	render() {
		const { id, name, email, phone } = this.props;
		const { showContactInfo } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;

					return (
						<div className="card card-body">
							<h4>
								{' '}
								{name} {' '}
								<i
									onClick={() => {
										this.setState({
											showContactInfo: !this.state.showContactInfo
										});
									}}
									className="fas fa-sort-down"
									style={{ cursor: 'pointer' }}
								/>
								<i
									className="fas fa-times"
									style={{ cursor: 'pointer', color: 'red', float: 'right' }}
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
								/>
							</h4>{' '}
							{' '}
							{showContactInfo ? (
								<ul className="list-group mb-3">
									<li className="list-group-item"> Email: {email} </li> {' '}
									<li className="list-group-item"> Phone: {phone} </li> {' '}
								</ul>
							) : null}{' '}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

//Validação do Props(PROPRIEDADE)
Contact.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired
};

export default Contact;
