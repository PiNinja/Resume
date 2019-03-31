import React from 'react';

export default (props) => {
  return (
    <article className="card">
        <h3>{props.object.title}</h3>
        <p>{props.object.description}</p>

        {props.object.scope && <p><strong>Scope</strong>: {props.object.scope}</p>}
        {props.object.cadre && <p><strong>Cadre</strong>: {props.object.cadre}</p>}

        {props.object.version && <p><strong>Version</strong>: {props.object.version}</p>}

        {props.object.examples && <ul><strong>Examples</strong>: {props.object.examples.map((o,i)=>(<li key={"exemple"+props.index+"-"+i}><a href={o} target="_blank" rel="noopener noreferrer" className="list">{o}</a></li>))}</ul>}
        {props.object.exemples && <ul><strong>Exemples</strong>: {props.object.exemples.map((o,i)=>(<li key={"exemple"+props.index+"-"+i}><a href={o} target="_blank" rel="noopener noreferrer" className="list">{o}</a></li>))}</ul>}
      <a href={props.object.link} target="_blank" rel="noopener noreferrer" className="external">{props.object.link}</a>
    </article>
  );
}