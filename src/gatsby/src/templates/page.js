import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { Main } from '../components/CVline/Main'


export default ({pageContext}) => {
  return(
    <>
      <SEO meta={pageContext.meta} lang={pageContext.lang} section={pageContext.section}/>
      <Header lang={pageContext.lang} section={pageContext.section}/>
      <main>
      {Object.keys(pageContext.data).map(s=>
      <section>
        <h2>{s}</h2>
        {pageContext.data[s].map((line,i)=><Main object={pageContext.data[s][i]} />)}
        
      </section>)}
      </main>
    </>
  )
}