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

export const editPost = (post, history) => ({
    type: postsActionTypes.EDIT_POST,
    payload: {
        post,
        history
    },
});

export const setEditPost = (post, posts) => ({
    type: postsActionTypes.SET_EDIT_POST,
    payload: {
        post,
        posts
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

export const setPostsFailure = (payload) => ({
    type: postsActionTypes.SET_POSTS_ERROR,
    payload
  });

export const setEditPostError = (payload) => ({
    type: postsActionTypes.SET_EDIT_POST_ERROR,
    payload
  });

export const setClearError = () => ({
    type: postsActionTypes.SET_CLEAR_ERROR,
  });