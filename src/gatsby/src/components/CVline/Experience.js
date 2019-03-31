import React from 'react';

export default (props) => {
  return (
    <article className="line">
      <p>{props.object.date}</p>
      <div>
        <h3>{props.object.title}</h3>
        {props.object.description.split('\n').map((o,i)=>(<p key={"experience"+props.index+"-"+i}>{o}</p>))}
      </div>
      <p>{props.object.city}</p>
    </article>
  );
}