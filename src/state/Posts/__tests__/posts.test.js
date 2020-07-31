import { getPostsRequest, getDropDownResult, editPostRequest } from '../Posts-Saga';
import * as api from '../Posts-Api';
import * as actions from '../Posts-Actions';
import { call, put } from 'redux-saga/effects';

const MOCK_RESPONSE = {
    body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    userId: 1,
};

describe('getPostsRequest', () => {
    it('successfully triggers success action with posts', () => {
        const generator = getPostsRequest();
        const response = { data: [ MOCK_RESPONSE ]}


        expect(generator.next().value)
            .toEqual(call(api.getPosts))

        expect(response).toBeTruthy()

        expect(generator.next(response))
            .toEqual({ done: true, value: undefined})
        
    })
}) 

describe('getDropDownResult', () => {
    it('successfully triggers success action with search results', () => {
        const payload = { 
            payload: {
                result: 'optio',
            },
        };
        const generator = getDropDownResult(payload);

        expect(generator.next().value)
            .toEqual(put(actions.setDropDownResults('optio')))

        
    })
}) 

describe('editPostRequest', () => {
    it('successfully triggers success action with edit info', () => {
        const payload = { payload: { post : MOCK_RESPONSE }}
        const generator = editPostRequest(payload);
        const result = { data: { post : MOCK_RESPONSE }}


        expect(generator.next().value)
            .toEqual(call(api.editPost, payload.payload.post))

    })
}) 