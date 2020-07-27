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

const postsSagas = [
    fork(watchGetPostsRequest),
    fork(watchSearchResult),
]

export default postsSagas;