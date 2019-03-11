import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	onDeleteClick = async (id, dispatch) => {
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
			dispatch({ type: 'DELETE_CONTACT', payload: id });
		} catch (error) {
			dispatch({ type: 'DELETE_CONTACT', payload: id });
			console.log(error);
		}
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
								{name}
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
								<Link to={`contact/edit/${id}`}>
									<i
										className="fa fa-pencil-alt"
										style={{
											cursor: 'pointer',
											color: 'black',
											float: 'right',
											marginRight: '1rem'
										}}
									/>
								</Link>
							</h4>
							{showContactInfo ? (
								<ul className="list-group mb-3">
									<li className="list-group-item"> Email: {email} </li>
									<li className="list-group-item"> Phone: {phone} </li>
								</ul>
							) : null}
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
