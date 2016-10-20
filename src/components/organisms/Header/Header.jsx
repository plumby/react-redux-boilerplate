import React from 'react'
import { PrimaryNavigation } from 'components'

import style from './style.css'

const Header = (props) => (
  <PrimaryNavigation {...props} className={style.navStyle} />
)

export default Header
