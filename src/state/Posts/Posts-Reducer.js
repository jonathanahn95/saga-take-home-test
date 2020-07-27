import postsActionTypes from './Posts-ActionTypes';
import { getSearchResults } from './Posts-Selectors';

const INITIAL_STATE = {
    posts: [],
    error: '',
    post: {},
    results: [],
};

export default function postReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case postsActionTypes.SET_POSTS_SUCCESS: 
            return {
                ...state,
                posts: action.payload.posts
            }
        case postsActionTypes.SET_SEARCH_RESULT: 
            const results = getSearchResults(state, action);
            console.log(results, 'red', action.payload.result)
            return {
                ...state,
                results
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

