import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RadioButton from './RadioButton';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
     <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>


      <div>
        <label>Mood</label>
          <div>
              <RadioButton name="mood" caption="Sad" radioButtonValue="sad"/>
              <RadioButton name="mood" caption="Happy" radioButtonValue="happy"/>
          </div>
      </div>
      
      
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  initialValues: { sex:"male", mood:"sad"}
})(SimpleForm);
