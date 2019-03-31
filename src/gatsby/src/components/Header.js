import React from 'react'
import { Link } from 'gatsby'

const json = require('../data/Resume.json')

export default (props) => {

  const languages = Object.keys(json);
  const lang = props.lang || languages[0];
  const section = props.section || Object.keys(json[lang].data)[0]
  const sectionIndex = Object.keys(json[lang].data).indexOf(section)
  const infos = json[lang].meta;
  const data = json[lang].data;
  return (
    <header>
      <nav>
        {Object.keys(data).map((cat)=>
          (<Link to={`/${lang}/${cat.toLowerCase()}`} key={"category"+cat} title={cat} className={cat===section?"selected":null}>{cat}</Link>)
        )}
        <div className="spacer"></div>
        {languages.length > 1 && languages.map((l)=>(
          <Link to={`/${l}/${Object.keys(json[l].data)[sectionIndex].toLowerCase()}`} key={l+"category"} title={l} className={l===lang?"selected":null}>{l}</Link>
        ))}
      </nav>
      <h1>{infos.name}</h1>
      <p>{infos.location}</p>
      {infos.contact? <p>{infos.contact}</p>:''}
      {infos.summary.split('\n').map((o,i)=>(<p key={"summary"+i}>{o}</p>))}
      <p>{infos.languages}</p>
      <ul>
        {infos.links.map((link,i)=>(
          <li key={lang+"link"+i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

