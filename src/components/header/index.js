import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
export default function index() {
  return (
    <>
      <header>
        <Link className="logo" to="/">AppFilmes</Link>
        <Link className="favoritos" to="/favoritos">Favoritos</Link>
      </header>
    </>
  )
}
