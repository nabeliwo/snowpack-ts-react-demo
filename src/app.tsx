import React from 'react'
import { render } from 'react-dom'

import { App } from './component'

console.log('hoge')

render(
  <App message="hogehoge" />,
  document.getElementById('app'),
)
