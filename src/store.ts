import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './store/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export type IReducer = ReturnType<typeof reducers>

export default store
