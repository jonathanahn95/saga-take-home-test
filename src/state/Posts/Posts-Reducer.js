import postsActionTypes from './Posts-ActionTypes';
import { getSearchResults } from './Posts-Selectors';

const INITIAL_STATE = {
    posts: [],
    error: '',
    post: {},
};

export default function postReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case postsActionTypes.SET_POSTS_SUCCESS: 
            return {
                ...state,
                posts: action.payload.posts
            }
        case postsActionTypes.SET_SEARCH_RESULT: 
            const newState = getSearchResults(state, action);

            return {
                ...state,
                results: newState
            }
        case postsActionTypes.SET_SINGLE_POST_SUCCESS: 
            return {
                ...state,
                post: action.payload.post
            }
        case postsActionTypes.SET_EDIT_POST: 
            return {
                ...state,
                post: action.payload.post
            }
        default: 
            return state;
    }
}

