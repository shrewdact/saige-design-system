import React from 'react'
import ReactDOM from 'react-dom'

import { Color } from '@saige.ds/react'

import '@saige.ds/scss/lib/Button.css'

ReactDOM.render(
  <Color  hexCode="#000" width='1rem' height='1rem'/>,
  document.querySelector('#root')
)
