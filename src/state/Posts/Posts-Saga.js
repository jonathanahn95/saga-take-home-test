import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from './Posts-Actions';
import * as api from './Posts-Api';
import postsActionTypes from './Posts-ActionTypes';

function* getPosts() { 
    try { 
        const result = yield call(api.getPosts)
        yield put(actions.setPostsSuccess(result.data))
    } catch (e) { 

    }
}

function* watchGetPostsRequest() { 
    yield takeEvery(postsActionTypes.GET_POSTS_REQUESTS, getPosts)
}

function* getSearchResult(action) { 
    try { 
        yield put(actions.setSearchResults(action.payload.result))
    } catch (e) { 
        // yield put(actions.usersError({
        //     error: 'An error occured',
        // }))
    }
}

function* watchSearchResult() {
    yield takeLatest(postsActionTypes.GET_SEARCH_RESULT, getSearchResult)
}

function* getSinglePost(action) { 
    try { 
        const result = yield call(api.getSinglePost, action.id)
        yield put(actions.setSinglePostSuccess(result.data))
    } catch (e) { 
        console.log(e)
        // yield put(actions.getSinglePostError())

    }
}


function* watchSinglePostRequest() { 
    yield takeEvery(postsActionTypes.GET_SINGLE_POST_REQUEST, getSinglePost)
}

function* editPost(action) { 
    try { 
        const result = yield call(api.editPost, action.payload.post)
        yield put(actions.setEditPost(result.data))
    } catch (e) { 
        // yield put(actions.usersError({
        //     error: 'An error occured',
        // }))
    }
}

function* watchEditPostRequest() {
    yield takeLatest(postsActionTypes.EDIT_POST, editPost)
}

const postsSagas = [
    fork(watchGetPostsRequest),
    fork(watchSearchResult),
    fork(watchSinglePostRequest),
    fork(watchEditPostRequest),
]

export default postsSagas;