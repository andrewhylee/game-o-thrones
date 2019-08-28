import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas'
import reducer from './reducers/index'

// create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// mount it onto the store
export default createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    )


// Now run the Saga
sagaMiddleware.run(mySaga)

// render the Application

