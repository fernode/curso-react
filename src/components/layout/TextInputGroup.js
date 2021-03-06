import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({ type, name, value, placeholder, label, onChange, error }) => {
	return (
		<div>
			<div className="form-group">
				<label htmlFor={label}>{label}</label>
				<input
					type={type}
					name={name}
					className={classnames('form-control form-control-lg', {
						'is-invalid': error
					})}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>

				{error ? <div className="invalid-feedback">{error}</div> : null}
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
