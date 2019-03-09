import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({ type, name, value, placeholder, label, onChange }) => {
	return (
		<div>
			<div className="form-group">
				<label htmlFor={label}>{label}</label>
				<input
					type={type}
					name={name}
					className="form-control form-control-lg"
					placeholder={placeholder}
					required
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

TextInputGroup.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
	type: 'text'
};

export default TextInputGroup;
