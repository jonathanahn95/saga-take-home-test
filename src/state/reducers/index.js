import { combineReducers } from 'redux';
import PostsReducer from '../Posts/Posts-Reducer';

export default combineReducers({
    posts: PostsReducer,
})