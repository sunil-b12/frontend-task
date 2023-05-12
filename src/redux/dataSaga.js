import { takeEvery, put } from 'redux-saga/effects'
import { GET_DATA_FETCH, GET_DATA_SUCCESS } from './constant';

function* getData() {
    let data = yield fetch('https://admin.naxa.com.np/api/services');
    data = yield data.json();
    yield put({type: GET_DATA_SUCCESS, data})
}


function* dataSaga() {
    yield takeEvery(GET_DATA_FETCH, getData)

}

export default dataSaga;