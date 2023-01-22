import React from 'react'
import style from './layout.module.css'
import { DarkThemeToggle, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid className={style.header}>
      <div className="flex md:order-2">
        <Navbar.Toggle />
        <DarkThemeToggle />
      </div>
    </Navbar>
  )
}

export default Header