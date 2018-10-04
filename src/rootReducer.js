import { combineReducers } from 'redux';

const dummyReducer = () => ({
	test: 'hello'
})

export default combineReducers({
	dummyReducer
});