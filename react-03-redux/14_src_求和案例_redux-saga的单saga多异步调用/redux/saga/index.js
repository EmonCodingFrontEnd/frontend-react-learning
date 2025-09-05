import {all} from 'redux-saga/effects'
import watchSaga1 from "./count1.saga";
import watchSaga2 from "./count2.saga";

function* rootSaga() {
    yield all([
        watchSaga1(),
        watchSaga2()
    ])
}

export default rootSaga;