import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import createStore from 'lib/store';
import history  from 'lib/routing';
import routes from 'routes';
import { theme } from './lib/styles/global-theme';

const store = createStore(history);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<ThemeProvider theme={theme}>
						{routes}
					</ThemeProvider>
				</ConnectedRouter>
			</Provider>
		)
	}
}

export default App;
