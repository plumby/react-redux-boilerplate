import React from 'react'
import { Match } from 'react-router'

import { Header, HomePage, RandomNumbersPage } from 'components'

const App = () => {
  return (
    <div>
      <Header />
      <Match exactly pattern="/" component={HomePage} />
      <Match exactly pattern="/test" component={RandomNumbersPage} />
    </div>
  )
}

export default App
