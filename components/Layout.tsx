import React from 'react'
import Header from './Header'
import style from './layout.module.css'
import Sidebar from './Sidebar'
import FlowbiteContext from '../context/FlowbiteContext'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <FlowbiteContext>
        <Header/>
        <div className={style.container}>
          <Sidebar/>
          <div className="dark:bg-gray-900 dark:text-white">
            {children}
          </div>
        </div>
      </FlowbiteContext>
    </>
  )
}

export default Layout