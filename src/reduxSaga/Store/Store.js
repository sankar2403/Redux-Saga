import { combineReducers, legacy_createStore, applyMiddleware,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import myFirstReducer from "../Reducer/Reduser";
import mySaga from "../Saga/Saga";


const sagaMiddlewrae = (createSagaMiddleware());
const rootReducer = combineReducers({ myFirstReducer });
const store = legacy_createStore(
    rootReducer,
 compose(  applyMiddleware(sagaMiddlewrae),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default store
sagaMiddlewrae.run(mySaga);