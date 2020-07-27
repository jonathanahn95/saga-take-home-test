import postsActionTypes from './Posts-ActionTypes';

export const getPostsRequest = () => ({
    type: postsActionTypes.GET_POSTS_REQUESTS
});

export const setPostsSuccess = (posts) => ({
    type: postsActionTypes.SET_POSTS_SUCCESS,
    payload: {
        posts
    }
});

export const getSearchResults = (result) => ({
    type: postsActionTypes.GET_SEARCH_RESULT,
    payload: {
        result
    }
});



export const setSearchResults = (result) => ({
    type: postsActionTypes.SET_SEARCH_RESULT,
    payload: {
        result
    }
});


