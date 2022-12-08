import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import showResults from './showResults';
import SimpleForm from './SimpleForm';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h4>The Mood radio button tilted "Sad" should have been selected.</h4>
      <SimpleForm onSubmit={showResults} />
      <Values form="simple" />
    </div>
  </Provider>,
  rootEl,
);
