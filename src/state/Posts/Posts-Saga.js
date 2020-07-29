import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from './Posts-Actions';
import * as api from './Posts-Api';
import postsActionTypes from './Posts-ActionTypes';

export function* getPosts() { 
    try { 
        const result = yield call(api.getPosts)
        yield put(actions.setPostsSuccess(result.data))
    } catch (e) { 

    }
}

function* watchGetPostsRequest() { 
    yield takeEvery(postsActionTypes.GET_POSTS_REQUESTS, getPosts)
}

export function* getDropDownResult(payload) { 
    try { 
        yield put(actions.setDropDownResults(payload.payload.result))
    } catch (e) { 
        // yield put(actions.usersError({
        //     error: 'An error occured',
        // }))
    }
}

function* watchDropDownResult() {
    yield takeLatest(postsActionTypes.GET_DROPDOWN_RESULT, getDropDownResult)
}

export function* getSinglePost(payload) { 
    try { 
        const result = yield call(api.getSinglePost, payload.id)
        yield put(actions.setSinglePostSuccess(result.data))
    } catch (e) { 
        console.log(e)
        // yield put(actions.getSinglePostError())

    }
}


function* watchSinglePostRequest() { 
    yield takeEvery(postsActionTypes.GET_SINGLE_POST_REQUEST, getSinglePost)
}

export function* editPost(payload) { 
    try { 
        const result = yield call(api.editPost, payload.payload.post)
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

function* clearDropDownResult() {
    yield put(actions.setClearedDropDownResults())
}

function* watchClearDropDownResults() {
    yield takeEvery(postsActionTypes.CLEAR_DROPDOWN_RESULTS, clearDropDownResult)
}

function* getSearchResult(payload) {
    yield put(actions.setSearchResults(payload.payload.result))
    yield put(actions.setClearedDropDownResults())
}

function* watchSearchResults() {
    yield takeLatest(postsActionTypes.GET_SEARCH_RESULT, getSearchResult)
}

const postsSagas = [
    fork(watchGetPostsRequest),
    fork(watchDropDownResult),
    fork(watchSinglePostRequest),
    fork(watchEditPostRequest),
    fork(watchClearDropDownResults),
    fork(watchSearchResults),
]

export default postsSagas;