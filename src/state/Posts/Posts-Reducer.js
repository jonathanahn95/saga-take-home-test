import postsActionTypes from './Posts-ActionTypes';
import { getSearchResults } from './Posts-Selectors';

const INITIAL_STATE = {
    posts: [],
    error: ''
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
        default: 
            return state;
    }
}

