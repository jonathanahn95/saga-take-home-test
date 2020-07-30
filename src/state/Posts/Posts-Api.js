import axios from 'axios';

export const getPosts = () => {
    return axios.get('/posts')
}

export const editPost = (post) => {
    return axios.patch(`/posts/${post.id}`, {
        title: post.title,
        body: post.body,
    })
}