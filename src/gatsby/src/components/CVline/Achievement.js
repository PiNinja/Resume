import React from 'react';

export default (props) => {
  return (
    <article className="achivement">
      <h3>{props.object.title}</h3>
      <p>{props.object.description}</p>
      {props.object.required && <p><strong>Required</strong> : <u>{props.object.required}</u></p>}
      {props.object.requis && <p><strong>Requis</strong> : <u>{props.object.requis}</u></p>}
    </article>
);
}