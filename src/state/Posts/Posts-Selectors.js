export const getSearchSelectorResults = (posts, searchWord) => {
    if (posts) {
        return posts.filter((post) => post.title.includes(searchWord))
    }
    return [];
};

export const getSinglePostInState = (posts, paramsId) => {
    if (posts.posts.length > 0) {
        return posts.posts.find((post) => post.id.toString() === paramsId)
    }
    return null;
};