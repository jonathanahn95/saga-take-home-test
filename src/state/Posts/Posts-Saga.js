import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from './Posts-Actions';
import * as api from './Posts-Api';
import postsActionTypes from './Posts-ActionTypes';

//worker sagas
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

const postsSagas = [
    fork(watchGetPostsRequest),
]

export default postsSagas;