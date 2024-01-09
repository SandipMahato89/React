import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './assets/Chai.jsx'


/*
const reactElement = {
  type : 'a',
  props : {
      href : 'https://www.google.com',
      target : '_blank'
  },
  children : 'Click me to visit Google'
}
*/

const anotherElement = (
  <a href = "https://google.com" target = "_blank">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click here to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

// <></> is known as fragment s 