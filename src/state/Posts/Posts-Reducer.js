import postsActionTypes from './Posts-ActionTypes';
import { getDropDownResults } from './Posts-Selectors';

const INITIAL_STATE = {
    posts: [],
    error: '',
    post: {},
    dropdown: [],
    searchResults: [],
};

export default function postReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case postsActionTypes.SET_POSTS_SUCCESS: 
            return {
                ...state,
                posts: action.payload.posts
            }
        case postsActionTypes.SET_DROPDOWN_RESULT: 
            const dropdown = getDropDownResults(state, action);
            return {
                ...state,
                dropdown
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
        case postsActionTypes.SET_CLEARED_DROPDOWN_RESULTS: 
            return {
                ...state,
                dropdown: []
            }
        case postsActionTypes.SET_SEARCH_RESULT: 
            const searchResults = getDropDownResults(state, action);
            return {
                ...state,
                searchResults
            }
        default: 
            return state;
    }
}

