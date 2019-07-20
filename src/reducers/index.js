import { combineReducers } from 'redux';
import { ideaReducer } from './ideaReducer';

export const rootReducer = combineReducers({
	ideas: ideaReducer
});
