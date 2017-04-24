import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import reducers from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App';
import './index.css';

injectTapEventPlugin()

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>
  ,
  document.getElementById('root')
);
