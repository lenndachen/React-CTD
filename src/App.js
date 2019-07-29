import React from 'react';
import './App.css';

function App(props) {
  return (
    <div>
      <h1>{props.intro} {props.name}
      </h1>
      <h3>Things learned at CTD classes</h3>
      <h5>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
        <li>{props.item4}</li>
      </h5>
    </div> 
  )
}

export default App;


/*{ category: "JS", subject: "Functions", proficiency: "7" }
{ category: "JS", subject: "Methods", proficiency: "3" }
{ category: "JS", subject: "Loops", proficiency: "6" }];*/
