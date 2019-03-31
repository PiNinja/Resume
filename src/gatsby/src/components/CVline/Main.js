import React from 'react';
import SkillSet from './Skillset'
import Experience from './Experience'
import Education from './Education'
import Project from './Project'
import Achievement from './Achievement'
import Hobby from './Hobby'

export function Main(props){
  switch(props.object.cardType){
    case "Skillset":
      return(<SkillSet {...props}/>);

    case "Experience":
      return(<Experience {...props}/>);

    case "Education":
      return(<Education {...props}/>);

    case "Project":
      return(<Project {...props}/>);

    case "Achievement":
      return(<Achievement {...props}/>);

    case "Hobby":
      return(<Hobby {...props}/>);

    default:
      return(<p>{JSON.stringify(props.object)}</p>);
  }
}