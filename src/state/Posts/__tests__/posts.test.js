import { getPosts, getSearchResult, getSinglePost, editPost } from '../Posts-Saga';
import * as api from '../Posts-Api';
import * as actions from '../Posts-Actions';
import { call, put } from 'redux-saga/effects';

const MOCK_RESPONSE = {
    body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    userId: 1,
};

describe('getPosts', () => {
    it('successfully triggers success action with posts', () => {
        const generator = getPosts();
        const response = { data: [ MOCK_RESPONSE ]}


        expect(generator.next().value)
            .toEqual(call(api.getPosts))

        expect(generator.next(response).value)
            .toEqual(put(actions.setPostsSuccess(response.data)))

        expect(generator.next())
            .toEqual({ done: true, value: undefined})
        
    })
}) 

describe('getSearchResult', () => {
    it('successfully triggers success action with search results', () => {
        const payload = { 
            payload: {
                result: 'optio',
            },
        };
        const generator = getSearchResult(payload);

        expect(generator.next().value)
            .toEqual(put(actions.setSearchResults('optio')))

        
    })
}) 

describe('getSinglePost', () => {
    it('successfully triggers success action with post', () => {
        const payload = {id: "1"}
        const generator = getSinglePost(payload);
        const response = { data: MOCK_RESPONSE }

        expect(generator.next().value)
            .toEqual(call(api.getSinglePost, payload.id))

        expect(generator.next(response).value)
            .toEqual(put(actions.setSinglePostSuccess(response.data)))

        expect(generator.next())
            .toEqual({ done: true, value: undefined})
        
    })
}) 

describe('getSinglePost', () => {
    it('successfully triggers success action with post', () => {
        const payload = {id: "1"}
        const generator = getSinglePost(payload);
        const response = { data: MOCK_RESPONSE }

        expect(generator.next().value)
            .toEqual(call(api.getSinglePost, payload.id))

        expect(generator.next(response).value)
            .toEqual(put(actions.setSinglePostSuccess(response.data)))

        expect(generator.next())
            .toEqual({ done: true, value: undefined})
        
    })
}) 

describe('editPost', () => {
    it('successfully triggers success action with edit info', () => {
        const payload = { payload: { post : MOCK_RESPONSE }}
        const generator = editPost(payload);
        const result = { data: { post : MOCK_RESPONSE }}


        expect(generator.next().value)
            .toEqual(call(api.editPost, payload.payload.post))

        expect(generator.next(result).value)
            .toEqual(put(actions.setEditPost(result.data)))

        expect(generator.next())
            .toEqual({ done: true, value: undefined})
        
    })
}) 