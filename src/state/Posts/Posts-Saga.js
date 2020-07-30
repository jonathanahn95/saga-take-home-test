import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import { 
    setPostsSuccess,
    setDropDownResults,
    setClearedDropDownResults,
    setSearchResults,
    setEditPost,
    setPostsFailure,
    setEditPostError,
    setClearError,
} from './Posts-Actions';
import {  
    editPost,
    getPosts,
} from './Posts-Api';
import postsActionTypes from './Posts-ActionTypes';

export function* getPostsRequest() { 
    try { 
        const result = yield call(getPosts)
        if (result.status === 200) {
            yield put(setPostsSuccess(result.data));
        }
    } catch (e) { 
        yield put(setPostsFailure(e.message));
    }
}

function* watchGetPostsRequest() { 
    yield takeEvery(postsActionTypes.GET_POSTS_REQUESTS, getPostsRequest)
}

export function* getDropDownResult(action) { 
    yield put(setDropDownResults(action.payload.result))
}

function* watchDropDownResult() {
    yield takeLatest(postsActionTypes.GET_DROPDOWN_RESULT, getDropDownResult)
}

function* clearDropDownResult() {
    yield put(setClearedDropDownResults())
}

function* watchClearDropDownResults() {
    yield takeEvery(postsActionTypes.CLEAR_DROPDOWN_RESULTS, clearDropDownResult)
}

export function* editPostRequest(action) { 
    try { 
        const result = yield call(editPost, action.payload.post)
        if (result.status === 200) { 
            yield put(setEditPost(result.data))
            action.payload.history.push('/')
            yield put(setClearError())
        }
    } catch (e) { 
        yield put(setEditPostError(e.message));
    }
}

function* watchEditPostRequest() {
    yield takeLatest(postsActionTypes.EDIT_POST, editPostRequest)
}

function* getSearchResultRequest(action) {
    yield put(setSearchResults(action.payload.result))
    yield put(setClearedDropDownResults())
}

function* watchSearchResults() {
    yield takeLatest(postsActionTypes.GET_SEARCH_RESULT, getSearchResultRequest)
}

const postsSagas = [
    fork(watchGetPostsRequest),
    fork(watchDropDownResult),
    fork(watchEditPostRequest),
    fork(watchClearDropDownResults),
    fork(watchSearchResults),
]

export default postsSagas;