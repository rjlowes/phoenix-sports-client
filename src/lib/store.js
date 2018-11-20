import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import rootReducer from 'rootReducer';
import rootSaga from 'rootSaga';


export default (history) => {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [routerMiddleware(history), sagaMiddleware];
	
	if(process.env.NODE_ENV === 'development') {
		middleware.push(logger);
	}

	const store = createStore(
		connectRouter(history)(rootReducer),
		// TODO add load state instead of {}
		{},
		compose(
			applyMiddleware(
				// routerMiddleware(history),
				// sagaMiddleware,
				// logger
				...middleware
			)
		)
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
