import React from 'react'
import ReactDOM from 'react-dom'

import { Text, Color, Margin } from '@saige.ds/react'

import '@saige.ds/scss/lib/Utilities.css'
// import '@saige.ds/scss/lib/Text.css'
import '@saige.ds/scss/lib/Margin.css'
import '@saige.ds/scss/lib/global.css'

ReactDOM.render(
  <Margin>
    <Text size='xs'>this is some text</Text>
  </Margin>,
  // <Color hexCode='#000' width='lg' height='lg' />,
  document.querySelector('#root')
)
