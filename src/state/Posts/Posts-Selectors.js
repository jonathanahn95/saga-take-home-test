export const getDropDownResults = (state, action) => {
    if (state.posts) {
        return state.posts.filter((post) => post.title.includes(action.payload.result))
    }
    return [];
};

export const getSinglePostInState = (posts, paramsId) => {
    if (posts.posts.length > 0) {
        return posts.posts.find((post) => post.id.toString() === paramsId)
    }
    return null;
};