import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import { Text, Color, Margin, Select } from '@saige.ds/react'

import '@saige.ds/scss/lib/Utilities.css'
import '@saige.ds/scss/lib/Text.css'
import '@saige.ds/scss/lib/Margin.css'
import '@saige.ds/scss/lib/Select.css'
import '@saige.ds/scss/lib/global.css'

const options = [
  { label: 'Strict Black', value: 'strict-black' },
  { label: 'Heavenly Green', value: 'heavenly-green' },
  { label: 'Sweet Pink', value: 'sweet pink' },
]

const root = ReactDOMClient.createRoot(
  document.getElementById('root')!
  // <Margin>
  //   <Text size='xs'>this is some text</Text>
  // </Margin>,
  // <Color hexCode='#000' width='lg' height='lg' />,
)

root.render(
  <div style={{ padding: '40px' }}>
    <Select options={options} />

    {/* <Select
      options={options}
      renderOption={({ option, getOptionRecommendedProps }) => (
        <p {...getOptionRecommendedProps({className: 'custom'})}>{option.label}</p>
      )}
    /> */}
  </div>
)

// <Select label='Please select a size' onOptionSelected={console.log()} options={[{label: '', value: ''}]}
