import React from "react";
import ReactDom from "react-dom";


// first component
function Greeting() {
  return (
    <div>
      <Title />
      <Paragraph />
    </div>
  );
}

const Title = () => <h2>Solo Leveling</h2>;
const Paragraph = () => {
  return <p> Let the hunt begin </p>;
}

// using arrow function
// method looks for 3 thinks : what element we want to return
//                               props object => we will pass an empty object
//                               what is going to rendered inside that element
// const Greeting = () => {
//   return React.createElement('div',{}, React.createElement('h1',{}, 'hello world'))
// }
// passing what we are going to render and where to render it.


ReactDom.render(<Greeting />, document.getElementById('root'));
