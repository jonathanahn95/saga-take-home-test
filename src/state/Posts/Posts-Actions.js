import postsActionTypes from './Posts-ActionTypes';

export const getPostsRequest = () => ({
    type: postsActionTypes.GET_POSTS_REQUESTS
});

export const setPostsSuccess = (posts) => ({
    type: postsActionTypes.SET_POSTS_SUCCESS,
    payload: {
        posts
    },
});

