import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/posts';
import * as api from '../api/posts.js';

//worker sagas
function* getPosts() { 
    try { 
        // call - call a promise, wait for it to resolve
        const result = yield call(api.getPosts)
        console.log(result)
        yield put(actions.setPostsSuccess(result.data))
    } catch (e) { 

    }
}

//watch sagas - watching for action to be dispatched then calls worker saga
function* watchGetPostsRequest() { 
    yield takeEvery(actions.Types.GET_POSTS_REQUESTS, getPosts)
}

//fork - creating multiple processes
// main process is postsSagas and a child process would be watchGetPostRequest
const postsSagas = [
    fork(watchGetPostsRequest),
]

export default postsSagas;