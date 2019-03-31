import React from 'react';

export default (props) => {
  return(
    <article>
      <h3>{props.object.title}</h3>
      <p>{props.object.description}</p>
    </article>
  )
}