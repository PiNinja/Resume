import React from 'react'
import { navigate, Link } from 'gatsby'
import SEO from '../components/SEO'
import Header from '../components/Header'

import '../styles/general.scss'
const json = require('../data/Resume.json')

export default () => {
  const defaultLang = Object.keys(json)[0]
  const meta = json[defaultLang].meta
  navigate(`/${defaultLang}`)
  return(
    <>
      <SEO meta={meta} lang={defaultLang}/>
      <Header/>
      <main>Redirecting to <Link to={`/${defaultLang}`}>{`/${defaultLang}`}</Link></main>
    </>
  )
}