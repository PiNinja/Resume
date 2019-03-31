import React from 'react'

export default (props) => {
  return (
    <article className="line">
      <p>{props.object.date}</p>
      <div>
        <h3>{props.object.institution}</h3>
        <p><strong>{props.object.level}</strong> {props.object.title}</p>
      </div>
      <p>{props.object.city}</p>
    </article>
  );
}