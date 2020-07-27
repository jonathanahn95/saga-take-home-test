export const Types = {
    GET_POSTS_REQUESTS : 'GET_POSTS_REQUESTS',
    SET_POSTS_SUCCESS : 'SET_POSTS_SUCCESS',
}

export const getPostsRequest = () => ({
    type: Types.GET_POSTS_REQUESTS
});

export const setPostsSuccess = (posts) => {
    return (
            {
                type: Types.SET_POSTS_SUCCESS,
                payload: {
                    posts
                },
            }
        );
};

