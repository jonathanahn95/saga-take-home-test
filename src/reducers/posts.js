import { Types } from '../actions/posts';

const INITIAL_STATE = {
    posts: [],
    error: ''
};

export default function postReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case Types.SET_POSTS_SUCCESS: {
            return {
                ...state,
                posts: action.payload.posts
            }
        }
        default: {
            return state;
        }
    }
}

