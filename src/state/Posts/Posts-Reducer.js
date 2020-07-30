import postsActionTypes from './Posts-ActionTypes';

const INITIAL_STATE = {
    posts: [],
    error: null,
    post: {},
    dropdown: '',
    searchResults: '',
};

export default function postReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case postsActionTypes.SET_POSTS_SUCCESS: 
            return {
                ...state,
                posts: action.payload.posts
            }
        case postsActionTypes.SET_DROPDOWN_RESULT: 
            return {
                ...state,
                dropdown: action.payload.result,
            }
        case postsActionTypes.SET_EDIT_POST: 
            return {
                ...state,
                post: action.payload.post
            }
        case postsActionTypes.SET_CLEARED_DROPDOWN_RESULTS: 
            return {
                ...state,
                dropdown: ''
            }
        case postsActionTypes.SET_SEARCH_RESULT: 
            return {
                ...state,
                searchResults: action.payload.result
            }
        default: 
            return state;
    }
}

