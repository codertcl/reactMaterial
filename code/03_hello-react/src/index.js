import ReactDOM from 'react-dom'
import React from 'react'
import { sum } from './utils'
import App from './App'


console.log(sum(1, 2));
ReactDOM.render(<App/>, document.getElementById('root'))