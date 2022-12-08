import React from 'react';
import PropTypes from 'prop-types';

import {Field} from 'redux-form';

const renderRadioButton = (props) => {
   const {radioButtonValue, caption, ...field} = props;
   return (
      <label>
         <input {...field.input}
                type="radio"
                value={radioButtonValue}
                />
         <span>{caption}</span>
      </label>
   );
};

let RadioButton = (props) => {
   return (
      <Field {...props} component={renderRadioButton}/>
   );
};

RadioButton.propTypes = {
   name:PropTypes.string.isRequired,
   caption:PropTypes.string.isRequired,
   radioButtonValue:PropTypes.string.isRequired
};

export default RadioButton;