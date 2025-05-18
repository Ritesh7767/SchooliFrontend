import React, { useTransition } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslate } from '../context/TranslateProvider'

const SideAttr = ({url, Icon, name}: {url: string, Icon: React.ElementType, name: string}) => {
    const {setTranslate} = useTranslate()
    const linkCss = "flex text-white font-semibold gap-4 text-lg items-center rounded-lg p-1 pl-2"
  return (
    <NavLink className={`${linkCss}`} to={url}>
        <span className="text-xl"><Icon/></span>
        <span>{name}</span>
    </NavLink>
  )
}

export default SideAttr