import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { REQUEST_API_DATA, receiveHelloWorld, receiveApiData } from './actions'
import fetchData from './api/fetchData';

//import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
    try {
        //do api call
        //const user = yield call(Api.fetchUser, action.payload.userId);
        const data = yield call(fetchData)
        yield put(receiveApiData)//the try and catch are exactly same thing, just written in different way.
    } catch (e) {
        yield put({
            type: REQUEST_API_DATA,
            text: "Hello, this is an Error"
        });
    }
}


/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}

