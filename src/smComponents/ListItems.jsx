import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function ListItems(props) {

  return (
    <li className=''>
        <NavLink to={props.link} className={({ isActive }) =>
                      isActive ? "activeHeaderLink" : "headerLinks"
                    } >{props.name}</NavLink>
    </li>
  )
}
