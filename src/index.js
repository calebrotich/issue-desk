import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxToastr from 'react-redux-toastr';
import reducers from './reducers';
import './css/index.css';
import App from './App';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <ReduxToastr
          newestOnTop={false}
          preventDuplicates
          position="top-center"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
    <App />
  </Provider>
    </BrowserRouter>,
   document.getElementById('root')
);
