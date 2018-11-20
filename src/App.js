import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from 'lib/store';
import history  from 'lib/routing';
import routes from 'routes';

const store = createStore(history);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					{routes}
				</ConnectedRouter>
			</Provider>
		)
	}
}

export default App;
