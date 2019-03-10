import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const { branding } = props;
	return (
		<nav className="navbar navbar-extand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<Link to="/" className="navbar-brand">
					{branding}
				</Link>
				<div>
					<ul className="navbar-nav d-flex flex-row">
						<li className="nav-item mr-1">
							<Link to="/" className="nav-link">
								<i className="fas fa-home" /> Home
							</Link>
						</li>
						<li className="nav-item mr-1">
							<Link to="/add-contact" className="nav-link">
								<i className="fas fa-plus" />Add
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								<i className="fas fa-question" />About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

//Definindo padrão para o props
Header.defaultProps = {
	branding: 'My app'
};

//PropTypes validação do props
Header.propTypes = {
	branding: PropTypes.string.isRequired
};
export default Header;
