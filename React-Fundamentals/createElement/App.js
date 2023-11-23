/*
  - React.createElement lets you create a React element. It serves as an alternative to writing JSX.
  - const element = createElement(type, props, ...children)
 
  - Create below html structure using React.createElement / without using JSX....
  
  <div class="parent">
    <div class="childOne">
      <h1>Heading one</h1>
      <h2>Heading two</h2>
    </div>
    <div class="childTwo">
      <h1>Heading one</h1>
      <h2>Heading two</h2>
    </div>
  </div>
*/

const parent = React.createElement(
  'div',
  { className: 'parent' },
  [
    React.createElement(
      'div',
      { className: 'childOne' },
      [
        React.createElement(
          'h1',
          {},
          'Heading one'
        ),
        React.createElement(
          'h2',
          {},
          'Heading two'
        )
      ]
    ),
    React.createElement(
      'div',
      { className: 'childTwo' },
      [
        React.createElement(
          'h1',
          {},
          'Heading one'
        ),
        React.createElement(
          'h2',
          {},
          'Heading two'
        )
      ]
    )
  ]
)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)