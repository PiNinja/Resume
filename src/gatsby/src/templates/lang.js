import React from 'react'
import { navigate, Link } from 'gatsby'
import SEO from '../components/SEO'
import Header from '../components/Header'


export default ({pageContext}) => {  
  const defaultSection = Object.keys(pageContext.data)[0]
  navigate(`/${pageContext.lang}/${defaultSection.toLowerCase()}`)
  return(
    <>
      <SEO lang={pageContext.lang} meta={pageContext.meta}/>
      <Header lang={pageContext.lang}/>
      <main>Redirecting to <Link to={`/${pageContext.lang}/${defaultSection.toLowerCase()}`}>{`/${pageContext.lang}/${defaultSection.toLowerCase()}`}</Link></main>
    </>
  )
}