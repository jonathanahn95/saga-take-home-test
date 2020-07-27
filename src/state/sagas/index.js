import PostsSagas from '../Posts/Posts-Saga.js';
import { all } from 'redux-saga/effects';

export default function* rootSaga() { 
    yield all([
        ...PostsSagas
    ])
}