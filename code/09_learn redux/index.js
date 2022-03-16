import store from './store/index.js'
import {addAction,subAction,addNumber,subNumber} from "./store/actionCreators.js";

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addAction())
store.dispatch(subAction())
store.dispatch(addNumber(5))
store.dispatch(subNumber(5))
