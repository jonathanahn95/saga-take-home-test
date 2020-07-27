export const getSearchResults = (state, action) => {
    if (state.posts) {
        return state.posts.filter((post) => post.title.includes(action.payload.result))
    }
    return [];
};