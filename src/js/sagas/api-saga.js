import { takeEvery, call, put, all } from "redux-saga/effects";
import { EMPLOYEES_REQUSTED } from '../constants/action-types';

function* watcherSaga(){
    yield takeEvery(EMPLOYEES_REQUSTED, workerSaga);
}

function* workerSaga(){
    try{
        const payload = yield call(getEmployees);
        yield put({ type: "EMPLOYEES_LOADED", payload});
    }catch(e){
        yield put({type: "API_ERRORED", payload: e});
    }
}

const getEmployees = async () => {
    let response = await fetch("https://employeesserver.herokuapp.com/employees");
    let data = await response.json();
    return data;
}


export default function* rootSaga(){
    yield all([
        watcherSaga()
    ])
}