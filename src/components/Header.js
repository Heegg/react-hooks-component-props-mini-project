import React from 'react'
import logo from "../assets/logo.svg";

function Header({ name }) {
  console.log(name)
  return (
      <header>
        <h1>{name}</h1>
      </header>
  )
}

export default Header