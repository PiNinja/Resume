import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { Main } from '../components/CVline/Main'
import '../styles/general.scss'

export default ({pageContext}) => {
  return(
    <>
      <SEO meta={pageContext.meta} lang={pageContext.lang} section={pageContext.section} canonical={pageContext.canonical}/>
      <Header lang={pageContext.lang} section={pageContext.section}/>
      <main>
      {Object.keys(pageContext.data).map(s=>
      <section key={`section-${pageContext.lang}-${s}`}>
        <h2>{s}</h2>
        {pageContext.data[s].map((line,i)=>
          <Main key={`section-${pageContext.lang}-${s}-${line.title}`} object={line} />
        )}
        
      </section>)}
      </main>
    </>
  )
}