import React from 'react'
import { Link as RouterLink} from 'react-router'
import style from './style.css'


const Link = (props) => (<RouterLink className={style.link} {...props} />)

export default Link;
