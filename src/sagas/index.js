import PostsSagas from './posts';
import { all } from 'redux-saga/effects';

export default function* rootSaga() { 
    yield all([
        ...PostsSagas
    ])
}