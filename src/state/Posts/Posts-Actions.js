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

export const getDropDownResults = (result) => ({
    type: postsActionTypes.GET_DROPDOWN_RESULT,
    payload: {
        result
    }
});

export const setDropDownResults = (result) => ({
    type: postsActionTypes.SET_DROPDOWN_RESULT,
    payload: {
        result
    }
});

export const getSinglePostRequest = (id) => ({
    type: postsActionTypes.GET_SINGLE_POST_REQUEST,
    id,
});

export const setSinglePostSuccess = (post) => ({
    type: postsActionTypes.SET_SINGLE_POST_SUCCESS,
    payload: {
        post
    },
});

export const editPost = (post) => ({
    type: postsActionTypes.EDIT_POST,
    payload: {
        post
    },
});

export const setEditPost = (post) => ({
    type: postsActionTypes.SET_EDIT_POST,
    payload: {
        post
    },
});


export const clearDropDownResults = () => ({
    type: postsActionTypes.CLEAR_DROPDOWN_RESULTS,
});



export const setClearedDropDownResults = () => ({
    type: postsActionTypes.SET_CLEARED_DROPDOWN_RESULTS,
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