import React from 'react';

export default (props) => {
  return (
    <article>
      <p>
        <strong>{props.object.title}</strong> : {props.object.subskills.join(', ')}
      </p>
    </article>
  );
}